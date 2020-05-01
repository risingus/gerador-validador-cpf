import styles from './Donation.module.styl'
import codeStyles from './Code.module.styl'
import React, { FC, useState } from 'react'
import BTCQR from './img/BTCQR.png'
import CopyToClipboard from 'react-copy-to-clipboard'

export const Donate: FC = () => {
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  const toggleCodeVisibility = (): void => {
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', thisID)
    setIsCodeVisible(!isCodeVisible)
  }

  return (
    <div className="donation">
      <ul className={`${styles.list} ${isCodeVisible ? styles.blur : ''}`}>
        <li>
          <a
            className={`${styles.button} ${styles.buttonStar}`}
            data-footnote="Deixe um ★"
            href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="16" viewBox="0 0 14 16" version="1.1">
              <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`${styles.button} ${styles.buttonPaypal}`}
            data-footnote="Abre a página do Paypal"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
        </li>

        <li>
          <CopyToClipboard text="3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE">
            <button
              className={`${styles.button} ${styles.buttonBitcoin}`}
              onClick={toggleCodeVisibility}
              data-footnote="Copia o número da carteira e exibe QRCode"
            >
              Bitcoin
            </button>
          </CopyToClipboard>
        </li>
      </ul>

      <div
        className={codeStyles.qrBox}
        style={{ display: isCodeVisible ? 'block' : 'none' }}
      >
        <img
          src={BTCQR}
          onClick={toggleCodeVisibility}
          className={`${codeStyles.code} ${
            isCodeVisible ? codeStyles.showCode : codeStyles.hideCode
          }`}
        />
      </div>
    </div>
  )
}
