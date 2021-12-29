class aniversarioMessages {
  pattern(username) {
    return `@${username} Segue o padrão para adicionar o aniversário | !aniversario dd/mm/YYYY`;
  }

  futureDate(username, dateBR) {
    return `@${username} ${dateBR} você nasceu nessa data?`;
  }

  correct(username, d, m) {
    return `@${username} agora vamos te dar um BEEEEELO de um parabéns no dia ${d}/${m}`;
  }

  fakeDate(username, date) {
    return `@${username} deixa de ser mentiroso, tu nem teria nascido ainda ¬.¬ ${date}`;
  }
}

class verifyBirthdayMessages {
  happyBirthday(username) {
    return `@${username} SÓ DUAS PALAVRAS PARA BENS!`;
  }
}

module.exports = {
  aniversarioMessages,
  verifyBirthdayMessages,
};
