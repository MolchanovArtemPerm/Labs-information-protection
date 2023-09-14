let alph = "abcdefghijklmnopqrstuvwxyz";
var pad;
var text, key;
var encrypt;
let f;
class OnTimePad {
    constructor(Alphabet) {
        this.alph = new Map();
        this.alph_r = new Map();
        let i = 0;
        for (const c of Alphabet) {
            this.alph.set(c, i);
            this.alph_r.set(i++, c);
        }
    }
    Crypt1(Text, Key, Crypt) {
        const key = Array.from(Key);
        const text = Array.from(Text);
        const sb = [];
        for (let i = 0; i < text.length; i++) {
            let idx;
            if (this.alph.has(text[i])) {
                let r = this.alph.size + this.alph.get(text[i]);
                r += (Crypt ? 1 : -1) * this.alph.get(key[i % key.length]);
                sb.push(this.alph_r.get(r % this.alph.size));
            }
        }
        return sb.join('');
    }
}
function Shifr() {
    pad = new OnTimePad(alph);
    text = prompt("Введите основной текст");
    f = false;
    do {
        key = prompt("Введите ключ\nТребованияф: размер >= осн.текста и случайная последовательность");
        for (let i = 1; key.length >= text.length & i <= key.length; i++) {
            if (key[i - 1] == key[i]) {
                break;
            }
            else {
                f = true;
            }
        }
    } while (!f)
    encrypt = pad.Crypt1(text, key, true);
    alert("Шифрованное слово: " + encrypt);
    console.log("Ключ: " + key);
    console.log("Шифрованное слово: " + encrypt)
}
function Reshifr() {
    pad = new OnTimePad(alph);
    text = prompt("Введите зашифрованный текст");
    f = false;
    do {
        key = prompt("Введите ключ\nТребованияф: размер >= осн.текста и случайная последовательность");
        for (let i = 1; key.length >= text.length & i <= key.length; i++) {
            if (key[i - 1] == key[i]) {
                break;
            }
            else {
                f = true;
            }
        }
    } while (!f)
    encrypt = pad.Crypt1(text, key, false);
    alert("Расшифрованное слово: " + encrypt);
    console.log("Расшифрованное слово: " + encrypt);
}
