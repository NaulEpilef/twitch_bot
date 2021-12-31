import {
  AniversarioMessagesPatternRequest,
  AniversarioMessagesFutureDate,
  AniversarioMessagesCorrect,
  AniversarioMessagesFakeDate,
  VerifyBirthdayMessagesHappyBirthday,
} from "./interfaces";

class aniversarioMessages {
  pattern({ username }: AniversarioMessagesPatternRequest): string {
    return `@${username} Segue o padrão para adicionar o aniversário | !aniversario dd/mm/YYYY`;
  }

  notDate({ username, dateBR }: AniversarioMessagesFutureDate): string {
    return `BROW @${username} você nasceu nessa data mesmo? ${dateBR} `;
  }

  correct({ username, d, m }: AniversarioMessagesCorrect): string {
    return `@${username} agora vamos te dar um BEEEEELO de um parabéns no dia ${d}/${m}`;
  }

  fakeDate({ username, date }: AniversarioMessagesFakeDate): string {
    return `@${username} deixa de ser mentiroso, tu nem teria nascido ainda ¬.¬ ${date}`;
  }
}

class verifyBirthdayMessages {
  happyBirthday({ username }: VerifyBirthdayMessagesHappyBirthday): string {
    return `@${username} SÓ DUAS PALAVRAS PARA BENS!`;
  }
}

export { aniversarioMessages, verifyBirthdayMessages };
