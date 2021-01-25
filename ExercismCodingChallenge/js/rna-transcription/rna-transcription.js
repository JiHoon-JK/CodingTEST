//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// dna 를 rna 로 바꾸는 함수를 만들어보자.

export const toRna = (Dna) => {
  var Rna = "";
  for (var i=0; i < Dna.length; i++){
    //Dna 문자열의 배열을 하나씩 반복문으로 비교해서 변환한다.
    if(Dna[i] == 'G'){
        Rna += Dna[i].replace('G','C');
    }
    if(Dna[i] == 'C'){
        Rna += Dna[i].replace('C','G');
    }
    if(Dna[i] == 'T'){
        Rna += Dna[i].replace('T','A');
    }
    if(Dna[i] == 'A'){
        Rna += Dna[i].replace('A','U');
    }
  }
  return Rna;
};
