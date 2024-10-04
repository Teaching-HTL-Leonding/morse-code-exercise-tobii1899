import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encode.component.html',
  styleUrl: './encode.component.css'
})
export class EncodeComponent {
  readonly userText = signal('');

  encode(): void {
    const morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];

    const resultHTML = document.getElementById('encode-result') as HTMLInputElement;

    if(!/^[A-Za-z ]+$/.test(this.userText())) {
      resultHTML!.value = '';
      return
    } else {
      resultHTML!.value = '';

      this.userText().split('').forEach((char) => {

        if(char === ' ') {
          resultHTML!.value += ' ';
        } else {
          const charCode = char.toUpperCase().charCodeAt(0);
          const morseChar = morseCode[charCode - 65];
          resultHTML!.value += morseChar + ' ';
        }
      });
    }
  }
}
