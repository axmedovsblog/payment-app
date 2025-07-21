'use strict'
////////////////////////////////////
////////// Data - Dasturda kerak bo'ladigan ma'lumotlar
// Birinchi akkount ma'lumoti
const account1 = {
  password: "1111",
  cardNumber: 8600345613240977,
  owner: {
    firstName: "Komil",
    lastName: "Rasulov",
  },
  transfers: [
    {
      amount: 200,
      date: "2019-11-18T21:31:17.178Z",
    },
    {
      amount: 455.23,
      date: "2019-12-23T07:42:02.383Z",
    },

    {
      amount: -306.5,
      date: "2020-01-28T09:15:04.904Z",
    },

    {
      amount: 25000,
      date: "2020-04-01T10:17:24.185Z",
    },

    {
      amount: -642.21,
      date: "2020-05-08T14:11:59.604Z",
    },

    {
      amount: -133.9,
      date: "2020-05-27T17:01:17.194Z",
    },

    {
      amount: -79.97,
      date: "2020-07-11T23:36:17.929Z",
    },
    {
      amount: -1300,
      date: "2020-07-12T10:51:36.790Z",
    },
  ],
  currency: "UZS",
  locale: "ru-RU",
}

// Ikkinchi akkount ma'lumoti

const account2 = {
  password: "2222",
  cardNumber: 8411347213244488,
  owner: {
    firstName: "Sardor",
    lastName: "Abdug'aniyev",
  },
  transfers: [
    {
      amount: 5000,
      date: "2019-11-01T13:15:33.035Z",
    },
    {
      amount: 3400,
      date: "2019-11-30T09:48:16.867Z",
    },

    {
      amount: -150,
      date: "2019-12-25T06:04:23.907Z",
    },

    {
      amount: -790,
      date: "2020-01-25T14:18:46.235Z",
    },

    {
      amount: -310,
      date: "2020-02-05T16:33:06.386Z",
    },

    {
      amount: -1000,
      date: "2020-04-10T14:43:26.374Z",
    },

    {
      amount: 8500,
      date: "2020-06-25T18:49:59.371Z",
    },
    {
      amount: -30,
      date: "2020-07-26T12:01:20.894Z",
    },
  ],
  currency: "USD",
  locale: "en-US",
}

// Akkountlarni accounts arrayiga yig'ib oldik

const accounts = [account1, account2]

////////////////////////////////////////////////
/////Elements
/// Loginni kiritadigan input elementi
const inputLogin = document.querySelector("#username")
/// Parolni kiritadigan input elementi
const inputPassword = document.querySelector("#passwordlogin")
/// Kirish buttoni
const btnLogin = document.querySelector(".btn-login")
// Payments App deb yozilgan h2 elementi
const brand = document.querySelector(".brand")
// Login, parol inputlari va kirish buttonini o'rab turgan div elementi
const loginForm = document.querySelector(".sign-in")
// Chiqish buttoni
const btnExit = document.querySelector(".btn-exit")
// Headerdan tashqari barcha elementlarni o'rab turuvchi asosiy element
const main = document.querySelector("main")
// Card elementlari
// Karta balansi yozilgan element
const cardBalance = document.querySelector(".card-balance")
// Karta raqami yozilgan element
const cardNumber = document.querySelector(".card-number")
// Karta egasi ism-sharifi yozilgan element
const cardOwner = document.querySelector(".card-owner")
// Barcha kirimlar yozilgan element
const inComes = document.querySelector(".incomes")
// Barcha chiqimlar yozilgan element
const expenses = document.querySelector(".expenses")
// O'tkazmalar tarixini o'rab turuvchi ul elementi
const plastHistory = document.querySelector(".transfers-list")
// Pul o'tkazish karta raqami inputi
const transferTo = document.querySelector(".input-transfer-to")
// Pul o'tkazish pul miqdori inputi
const transferAmount = document.querySelector(".input-transfer-amount")
// yuborish buttoni
const btnSend = document.querySelector(".btn-send")
// ===================
const rightSide = document.querySelector(".section-right")
const leftSide = document.querySelector(".section-left")
/////////////////////////////////////////////////////////////
// ummumiy katta page 
const basicPage = document.querySelector(".basicPage")
//forget password knopkasi forget formga o'tish
const forgetPsBtn = document.querySelector(".forgot")
//change password form
const changePassword = document.querySelector(".change-password")
//login pagedan sign up pagega o'tish knopkasi
const signUpBtn = document.querySelector(".signUpBtn")
//////////////////////////////////////////////////////////////
//sign up form
const signUpForm = document.querySelector(".sign-up")
//firstNameInput
const firstNameInput = document.querySelector("#first-name")
//lastNameInput
const lastNameInput = document.querySelector("#last-name")
//phoneNumberInput
const phoneNumberInput = document.querySelector("#phone-number")
//signUppassword
const signUpPassword = document.querySelector("#password-sign-up")
//confirm-password
const confirmPassword = document.querySelector("#confirm-password")
// SignUp formdan LOGIN formga qaytish knopkasi
const signUpToLogin = document.querySelector(".already")
const signUpToLogin1 = document.querySelector(".already1")
//yangi akk yaratish knopkasi signUp knopkasi
const createAcc = document.querySelector(".createAcc")

// MODALS 
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".x")
const inputPhoneSms = document.querySelector("#code")
const verifacationBtn = document.querySelector(".verifacationBtn")
const timer = document.querySelector(".time")
const refresh = document.querySelector(".refresh")

//card info
const cardInfo = document.querySelector(".card-info1")
const cardInfoCreateBtn = document.querySelector(".card-info-create")
const inputNewCardNumber = document.querySelector("#newCard")
const inputNewCardPeriod = document.querySelector("#validity")
const inputNewCurrencySelect = document.querySelector(".new-currency")

//change password
const changeUsernamesPassword = document.querySelector(".changeUsernamesPassword")
const changePasswordUsernameInput = document.querySelector("#userName")
const changePsBtn = document.querySelector(".for-ps-change")
const cancelChangePsBtn = document.querySelector(".non-change-ps")
const changePasswordInputs = document.querySelector(".changePasswordInputs")
const changeToPasswordInput = document.querySelector("#changeToPassword")
const changeToPasswordConfirm = document.querySelector("#changeToPasswordConfirm")

const chars = "0123456789!@#$%^&*()_+?:{}[]"
let b
let number

function splitStringWithSpaces(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      result += ' '
    }
    result += str[i]
  }
  return result
}
let confirmCount = 0
changePsBtn.addEventListener("click", (e) => {
  confirmCount++
  e.preventDefault()
  if (!changePasswordUsernameInput.value.trim()) return
  const a = accounts.find(acc => acc.username === changePasswordUsernameInput.value)
  if (!a) {
    alert(`No such user`)
    return
  }
  if (confirmCount == 1) {
    modal.classList.remove("hide")
    watchPerMinute()
    randomNumberForVerification()
    changeUsernamesPassword.classList.add("hide")
    // changePasswordUsernameInput.value = '';
  }
  else {
    if (!changeToPasswordInput.value.trim()) return
    if (!changeToPasswordConfirm.value.trim()) return
    if (changeToPasswordConfirm.value !== changeToPasswordInput.value) return
    a.password = changeToPasswordInput.value.trim()
    changePasswordInputs.classList.remove("hide")
    changePasswordUsernameInput.value = ''
    changePassword.classList.add("hide")
    loginForm.classList.remove("hide")
    changeToPasswordInput.value = ''
    changeToPasswordConfirm.value = ''
  }
})
cancelChangePsBtn.addEventListener("click", (e) => {
  e.preventDefault()
  changePassword.classList.add("hide")
  loginForm.classList.remove("hide")
})

closeModalBtn.addEventListener("click", () => {
  inputPhoneSms.value = ""
  modal.classList.add("hide")
  timer.textContent = "30"
  verifacationBtn.disabled = false
  clearInterval(b)
})
document.addEventListener("click", (event) => {
  if (event.target == modal) {
    inputPhoneSms.value = ""
    modal.classList.add("hide")
    timer.textContent = "30"
    verifacationBtn.disabled = false
    clearInterval(b)
  }
})

const watchPerMinute = () => {
  b = setInterval(() => {
    timer.textContent--
    if (+timer.textContent === 0) {
      clearInterval(b)
    }
  }, 1000)
}
refresh.addEventListener("click", () => {
  clearInterval(b)
  timer.textContent = "30"
  watchPerMinute()
  randomNumberForVerification()
})
verifacationBtn.addEventListener("click", () => {
  if (+timer.textContent === 0) {
    verifacationBtn.disabled = true
    return
  }
  if (+inputPhoneSms.value === number) {
    createNewAccount()
    firstNameInput.value = ''
    lastNameInput.value = ''
    phoneNumberInput.value = ''
    signUpPassword.value = ''
    confirmPassword.value = ''
    modal.classList.add("hide")
    timer.textContent = "30"
    clearInterval(b)
    inputPhoneSms.value = ''
    if (!changePasswordUsernameInput.value) {
      signUpForm.classList.add("hide")
      cardInfo.classList.remove("hide")
    }
    else {
      changePasswordInputs.classList.remove("hide")
    }
  }
})
const checkerInputs = () => {
  if (!firstNameInput.value.trim() &&
    !lastNameInput.value.trim() &&
    !phoneNumberInput.value.trim() &&
    !signUpPassword.value.trim() &&
    !confirmPassword.value.trim()
  ) return
  if (signUpPassword.value.trim().length < 4 ||
    signUpPassword.value.trim().length > 12) return
  const str = firstNameInput.value.trim() + lastNameInput.value.trim()
  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) return
  }
  if (isNaN(parseInt(phoneNumberInput.value.trim()))) return
  if (signUpPassword.value !== confirmPassword.value) {
    alert(`Incomplete data or password input error!`)
    return
  }
  modal.classList.remove("hide")
  watchPerMinute()
  randomNumberForVerification()
}
const randomNumberForVerification = () => {
  const num = Math.trunc(Math.random() * 1000000)
  alert(`SMS kodni kiriting: ${num}`)
  number = num
}

//////////////////////////////////////////////////
///// Functions
/// Har bir akkountga username qo'shadigan funksiya
const createLogin = function () {
  accounts.forEach(acc => {
    // Gali kelgan akkountga username qo'shamiz
    acc.username =
      acc.owner.firstName[0].toLowerCase() +
      acc.owner.lastName[0].toLowerCase()
  })
}
/*
Dastur ishga tushgan paytida yuqoridagi funksiyani 
chaqirib har bir akkountga username qo'shib oldik.
!!!!createLogin funksiyasini tahlil qilib ko'rib chiqing.
*/
createLogin()
/* 
Pul birligini formatlaydigan funksiya.
Parametrdan amount (summa), locale (til va davlat),
currency (pul birligi) qabul qiladi va 
shular asosida formatlaydi va formatlangan sonni qaytarib yuboradi (return).
*/
const currencyFormatter = (amount, locale, currency) => {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency,
  })

  // oldingi usul =======
  //  new Intl.NumberFormat(locale, {  
  //     style: "currency",
  //     currency,
  //   }).format(amount)

}
/*
Umumiy balansni hisoblaydigan funksiya.
Parametrdan o'tkazmalar arrayini qabul qiladi va
hisoblab chiqqan natijani qaytarib yuboradi.
Nuqtadan keyingni sonlar ko'payib ketsa 
2 tagacha qisqartiradi. toFixed dan doim string qaytadi.
Shuning uchun natijani numberga o'girib qaytaradi
*/
const calcBalance = (transfers) => {
  return +transfers.reduce((bal, tr) => bal + tr.amount, 0).toFixed(2)
}
/*
Kartaga oid barcha ma'lumotlarni chiqarib beradigan funksiya.
Parametrdan akkount qabul qiladi va uning ma'lumotlarini 
karta elementiga chiqaradi. Balansini chiqarishdan oldin 
uni hisoblash uchun calcBalance funksiyasini ishlatadi.
va qaytgan natijani formatlab chiqarish uchun currencyFormatter
funksiyasini ishlatadi
*/
const setCardInfo = (acc) => {
  // Parametrda kirgan akkaunt egasining ism familiyasini chiqarish
  cardOwner.textContent = Object.values(acc.owner).join(" ")
  // Parametrda kirgan akkaunt egasining karta raqamini chiqarish
  const number = acc.cardNumber.toString()
  const hideCardNumber = son => son.slice(-4).padStart(16, '*')
  cardNumber.textContent = splitStringWithSpaces(hideCardNumber(number))
  // Balansni hisoblash
  const bal = calcBalance(acc.transfers)
  // Balanceni tegishli elementlarga formatlab chiqarish
  cardBalance.textContent = currencyFormatter(bal, acc.locale, acc.currency)
}
/*
Barcha kirim va chiqimlarning summasini hisoblab
natijani tegish elementlarga chiqaradi.
Parametrdan akkount qabul qiladi va akkountning
transfers arrayidan kirim va chiqimlarni hisoblab oladi.
Chiqqan natijani formatlash uchun currencyFormatter
funksiyasini ishlatadi.
*/
const setSummary = (acc) => {

  //////////////////////////////
  ///////// Kirim va chiqimlarni hisoblashning birinchi usuli
  // const inCome = +acc.transfers
  //   .filter((tr) => tr.amount > 0)
  //   .reduce((bal, tr) => bal + tr.amount, 0)
  //   .toFixed(2);

  // const expense = +acc.transfers
  //   .filter((tr) => tr.amount < 0)
  //   .reduce((bal, tr) => bal + tr.amount, 0)
  //   .toFixed(2);

  //////////////////////////////
  ///////// Kirim va chiqimlarni hisoblashning ikkinchi usuli (faqat reduce bilan)
  const { inCome, expense } = acc.transfers.reduce(
    (sumInfo, tr) => {
      const type = tr.amount > 0 ? "inCome" : "expense"
      sumInfo[type] += tr.amount
      return sumInfo
    },
    { inCome: 0, expense: 0 }
  )
  // Natijalarni tegishli elementlarga formatlab chiqarish
  inComes.textContent = currencyFormatter(inCome, acc.locale, acc.currency)
  expenses.textContent = currencyFormatter(expense, acc.locale, acc.currency)
}
/*
O'tkazmalar tarixini chiqaradigan funksiya.
Parametrdan akkount qabul qiladi va akkountning
transfers arrayini aylanib har bir o'tkazma uchun 
li elementini yasab o'tkazmalar tarixini o'rab 
turuvchi element ichiga qo'shadi.
*/
const setTransferHistory = (acc) => {
  // Sanani formatlaydigan funksiya
  const dateFormat = (date) => new Date(date).toLocaleString(acc.locale)
  /* 
  Paramdan kirib kelgan akkountning transfers arrayini aylanib
  har biri uchun li elementi yasaydi. transferning qiymati va
  sanasini formatlab chiqarish uchun dateFormat va currencyFormatter
  funksiyalarini ishlatadi
  */
  acc.transfers.forEach((tr) => {
    const trItem = `<li class="transfer-item">
                      <div>
                        <p class="transfer-type">${tr.amount > 0 ? "kirim" : "chiqim"}</p>
                        <span class="tranfer-date">${dateFormat(tr.date)}</span>
                      </div>
                      <span class="transfer-amount" style="color: ${tr.amount < 0 ? "#B80D0D" : "green"}">
                        ${currencyFormatter(tr.amount, acc.locale, acc.currency)}
                      </span>
                    </li>`
    /*
    Yasalgan li elementini o'tkazmalar tarixini 
    chiqaruvchi asosiy ul elementi ichiga qo'shamiz
     */
    plastHistory.insertAdjacentHTML("afterbegin", trItem)
  })
}
/*
Barcha ma'lumotlarni chiqaruvchi funksiya.
Parametrdan akkount qabul qiladi.
Ichida akkountga tegishli ma'lumotlarni chiqaruvchi
barcha funksiyalarni chaqiradi. Login bo'lgan payti
har bir funksiyani chaqirib o'tirmaslik uchun shunday qilindi
*/
const setAllInfo = (acc) => {
  setCardInfo(acc)
  setSummary(acc)
  setTransferHistory(acc)
}

/* 
Joriy akkountni ushlab turuvchi o'zgaruvchi.
Login qilingan payti o'zlashadi. Hozir qaysi akkount egasi
tizimga kirganligini bilish uchun ishlatidi.
*/
let loggedInAccount

//Test
// setAllInfo(account2); 
// loginForm.classList.add("hide");
btnExit.classList.remove("hide")

///////////////////////////////////////
/////////Event listenerlar
//
btnLogin.addEventListener("click", (e) => {
  e.preventDefault()
  /* 
  Accounts arrayidan login inputiga kiritilgan usernamega 
  to'g'ri keladigan akkountni topib olamiz
  */
  const candidate = accounts.find(acc => acc.username === inputLogin.value)
  /* 
  Agar bunday akkount topilmasa (find metodidan undefined qaytsa) 
  funksiyadan chiqib ketamiz
  */
  // if (!candidate) return;
  /* 
  Agar akkount topilsa (find metodidan topilgan akkount qaytsa) 
  parol inputiga kiritilgan parol bilan topilgan akkountning 
  parolini solishtiramiz. Agar to'g'ri kelmasa funksiyadan 
  chiqib ketamiz
  */
  //Xatolikni aytish uchun small
  const loginSmall = document.querySelector(".loginSmall")
  if ((!candidate) || candidate.password !== inputPassword.value) {
    loginSmall.textContent = 'Login or Password error !'
    return
  }
  /* 
  Agar parol inputiga kiritilgan parol bilan topilgan akkountning 
  paroli mos kelsa hozirgi kirgan akkountni ushlab turuvchi o'zgaruvchiga
  topilgan akkountni o'zlashtiramiz
  */
  loggedInAccount = candidate
  /* 
  Kirgan akkount ism familiyasiga 
  Xush kelibsiz degan yozuvni qo'shib headerga chiqaramiz.
  Payments App yozuvining o'rniga.
  */
  brand.textContent = `Xush kelibsiz ${loggedInAccount.owner.firstName} ${loggedInAccount.owner.lastName}`
  /* 
  Login inputida kiritilgan value 
  qolib ketmasligi uchun valueni bo'sh
  stringga tenglaymiz
  */
  inputLogin.value = ""
  /* 
  Parol inputida kiritilgan value 
  qolib ketmasligi uchun valueni bo'sh
  stringga tenglaymiz
  */
  inputPassword.value = ""
  // Login formni olib tashlaymiz
  loginForm.classList.add("hide")
  // Chiqish buttonni chiqaramiz
  btnExit.classList.remove("hide")
  basicPage.classList.remove("hide")
  /* 
  Kirgan akkountga tegishli barcha ma'lumotlarni chiqarish uchun 
  setAllInfo funksiyasini chaqirib kirgan akkount obyektini berib
  yuboramiz. Chunki u funksiya akkount obyektini qabul 
  qiladi deb yozganmiz.
  */
  setAllInfo(loggedInAccount)
  /* 
  Headerni tagidagi asosiy ma'lumotlarni o'rab turuvchi 
  elementni ko'rinadigan qilamiz
  */
  leftSide.classList.remove("hide-left")
  rightSide.classList.remove("hide-right")
})

// Pul o'tkazish
// 8411347213244488 sa
// 8600345613240977 kr
// Jo'natish buttoniga event listener qo'shamiz
btnSend.addEventListener("click", (e) => {
  e.preventDefault()
  /* 
  Jo'natish button bosilgan payti, karta raqami
  kiritilgan inputning valuesini olib accounts
  arrayini ichidan karta raqami shu valuega 
  teng bo'lgan accountni topib olamiz. Maqsad
  shunday karta raqamli akkount bormi yo'qmi 
  aniqlash. Akkountni topish uchun beriladigan shartda
  input dan kelgan karta raqami joriy akkountning
  karta raqamiga teng emasligiga ham tekshiramiz. 
  Chunki agar inputga o'zining karta raqamini kiritsa pul
  o'ziga qo'shilib qolishi mumkin. Bizda esa bunday 
  bo'lmasligi kerak. Topilgan akkountni toAccount
  o'zgaruvchisiga o'zlashtiramiz.
  */
  const toAccount = accounts.find(acc => acc.cardNumber === +transferTo.value && loggedInAccount.cardNumber !== +transferTo.value)
  /*
  Agar akkount topilmasa funksiyadan chiqib ketamiz
  */
  if (!toAccount) return
  /* 
  Agar akkount topilsa joriy akkountning balansini
  hisoblaymiz. Buning uchun yuqorida yozilgan
  calcBalance funksiyamizga joriy akkountning
  transferlar arrayini berib yuboramiz. Undan bizga
  hisoblanagan balans qaytadi.
  */
  const balance = calcBalance(loggedInAccount.transfers)
  /* 
  Inputga kiritilgan o'tkazilishi kerak bo'lgan summani
  500 dan kam emasligiga (paymega o'xshab), va joriy
  akkountning balansidan kichik ekanligiga tekshiramiz.
  Maqsad balansda yetarli mablag' bor yo'qligini tekshirish.
  Agar kiritilgan summa 500 dan katta bo'lsa va balansda
  yetarli pul bo'lsa ishni davom ettiramiz. 
  */

  if (!(+transferAmount.value < balance)) return

  if (loggedInAccount.currency === "USD" && +transferAmount.value <= 0) return
  if (loggedInAccount.currency === "UZS" && +transferAmount.value < 500) return
  /* 
  Hozirgi sana ISO formatda. Transfer obyektining date
  propertysiga beramiz.
  */
  const date = new Date().toISOString()
  /* 
  Joriy akkountning transfers ro'yxatiga bitta 
  transfer obyektini qo'shamiz. amountiga inputdan
  kelgan summani numberga o'girib, manfiy qilib yozamiz 
  (chunki bu harajat). Va sanani beramiz.
  */
  loggedInAccount.transfers.push({
    amount: -Number(transferAmount.value),
    date,
  })
  /* 
  Karta raqami bo'yicha topilgan akkountning transfers 
  ro'yxatiga bitta transfer obyektini qo'shamiz. 
  amountiga inputdan kelgan summani numberga o'girib, musbat qilib yozamiz 
  (chunki bu kirim). Va sanani beramiz.
  */

  const convertationUZSToUSD = +(transferAmount.value / 12145).toFixed(2)
  const convertationUSDToUZS = +(transferAmount.value * 12145).toFixed(2)


  // console.log(convertation);

  let receivedAmount
  if (loggedInAccount.currency === toAccount.currency) {
    receivedAmount = +transferAmount.value
  } else if (loggedInAccount.currency === "UZS" && toAccount.currency === "USD") {
    receivedAmount = +(transferAmount.value / 12145).toFixed(2)
  } else if (loggedInAccount.currency === "USD" && toAccount.currency === "UZS") {
    receivedAmount = +(transferAmount.value * 12145).toFixed(2)
  } else {
    alert("Noma'lum valyuta o'zgarishi")
    return
  }

  toAccount.transfers.push({
    amount: receivedAmount,
    date,
  })
  // Transfer inputlarini tozalaymiz
  transferAmount.value = ""
  transferTo.value = ""
  /* 
  Barcha ma'lumotlarni chiqaradigan funksiyamizni chaqiramiz. 
  Chunki foydalanuvchiga qiymatlarni yangi ma'lumotlar asosida chiqarishimiz kerak
  */
  setAllInfo(loggedInAccount)
})

// chiqish

btnExit.addEventListener("click", () => {
  /* 
  Joriy akkountni saqlaydigan o'zgaruvchini null ga tenglaymiz.
  Tizimga hechkim kirmagan degan ma'noda
  */
  basicPage.classList.add("hide")
  loggedInAccount = null
  // UI dagi ma'lumotlarni tozalaymiz
  loginForm.classList.remove("hide")
  btnExit.classList.add("hide")
  leftSide.classList.add("hide-left")
  rightSide.classList.add("hide-right")
  cardOwner.textContent = ""
  cardNumber.textContent = ""
  cardBalance.textContent = ""
  brand.textContent = "Payments App"
  inComes.textContent = ""
  expenses.textContent = ""
  plastHistory.innerHTML = ""
})

//login formdan sign Up pagega o'tish knopkasi
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault()
  loginForm.classList.add("hide")
  signUpForm.classList.remove("hide")
  inputLogin.textContent = ""
  inputPassword.textContent = ""
})

// SignUp formdan LOGIN formga qaytish knopkasi
signUpToLogin.addEventListener("click", (e) => {
  e.preventDefault()
  signUpForm.classList.add("hide")
  loginForm.classList.remove("hide")
  firstNameInput.value = ''
  lastNameInput.value = ''
  phoneNumberInput.value = ''
  signUpPassword.value = ''
  confirmPassword.value = ''
})
signUpToLogin1.addEventListener("click", (e) => {
  e.preventDefault()
  cardInfo.classList.add("hide")
  loginForm.classList.remove("hide")
  inputNewCardNumber.value = ''
  inputNewCardPeriod.value = ''
})
//forget password knopkasi forget formga o'tish
forgetPsBtn.addEventListener("click", () => {
  loginForm.classList.add("hide")
  changePassword.classList.remove("hide")
  inputLogin.value = ''
  inputPassword.value = ''
})

function createNewAccount() {
  const account = {
    password: signUpPassword.value.trim(),
    cardNumber: +inputNewCardNumber.value.trim(),
    owner: {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
    },
    transfers: [
      {
        amount: 0,
        date: new Date().toISOString(),
      },
    ],
    currency: inputNewCurrencySelect.value,
    locale: navigator.language,
  }
  accounts.push(account)
}

//creataCc button
createAcc.addEventListener("click", (e) => {
  e.preventDefault()
  checkerInputs()
})

//create card
cardInfoCreateBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (!(inputNewCardNumber.value.trim() &&
    inputNewCardPeriod.value.trim() &&
    inputNewCardNumber.value.trim().length == 16 &&
    inputNewCardPeriod.value.trim().length == 4)) return

  const checking = accounts.find(acc => acc.cardNumber === +inputNewCardNumber.value.trim())

  if (checking) {
    alert("The user is registered")
    return
  }
  createLogin()
  accounts[accounts.length - 1].cardNumber = +inputNewCardNumber.value.trim()
  inputNewCardNumber.value = ''
  inputNewCardPeriod.value = ''
  loginForm.classList.remove("hide")
  cardInfo.classList.add("hide")
})
