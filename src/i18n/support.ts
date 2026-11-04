import type { Localized } from '../data/lots';
import en from './en';
import fr from './fr';
import ja from './ja';

const l = (fr: string, en: string, ja: string): Localized => ({ fr, en, ja });

export const frenchAssumptions: Record<string, { label: string; value: string }> = {
  "A1": {
    "label": "Société exploitante",
    "value": "Une SAS française distincte sera créée à Paris pour ARTIQUE, sans rattachement à la société d’un tiers. Le développement et l’exploitation technique seront assurés depuis le Japon sous contrat. Les frais obligatoires de constitution s’élèvent à environ 250 € HT (immatriculation, annonce légale, déclaration des bénéficiaires effectifs), avec un capital minimum de 1 €. L’intervention d’un avocat ou d’un expert-comptable ajoute environ 300 à 2 500 € ; les offres d’accompagnement complet destinées aux fondateurs étrangers atteignent environ 8 000 €. Un président non résident est possible, mais l’ouverture du compte de dépôt du capital peut être longue en l’absence de dirigeant résidant en France."
  },
  "A2": {
    "label": "Cadre juridique des ventes",
    "value": "Courtage aux enchères par voie électronique, option A : les annonces sont rédigées et publiées par le vendeur, sous sa responsabilité. ARTIQUE propose une aide à la rédaction et un guide de vocabulaire, sans rédiger ni certifier les descriptions. Son examen porte uniquement sur la recevabilité : objets interdits, informations manquantes, fraude manifeste. La vente se conclut automatiquement entre le vendeur et le meilleur enchérisseur à l’heure de clôture fixe, selon les conditions d’utilisation ; la nature du service est indiquée sur chaque page. Un partenariat avec un OVV déclaré reste une option ultérieure. À valider par un avocat français."
  },
  "A3": {
    "label": "Marque et nom de domaine",
    "value": "Le nom ARTIQUE présente un risque : artique.fr est déjà utilisé par une société française de prototypage par IA, et artique.com, .art et .net sont enregistrés ; seuls .eu, .paris et .io sont disponibles. Aucune marque « ARTIQUE » française ou de l’Union européenne n’a été trouvée dans les données indexées sur le Web (des marques américaines existent dans d’autres classes ; « ARTIQO » est une marque de l’Union européenne), mais les recherches officielles auprès de l’INPI et de l’EUIPO doivent être menées avant la constitution. Un autre nom, ou un nom plus distinctif, sera probablement nécessaire."
  },
  "A4": {
    "label": "Marché, langues, monnaie et fuseau horaire",
    "value": "La France en priorité, avec livraison uniquement dans l’UE au lancement, hors Royaume-Uni et Japon, donc sans formalités douanières. Interface FR / EN / JA ; les annonces restent dans la langue du vendeur et ne sont pas traduites par ARTIQUE. Le visiteur peut utiliser la traduction du navigateur. Prix en EUR uniquement. Clôtures en Europe/Paris, avec affichage de l’heure locale du visiteur."
  },
  "A5": {
    "label": "Vendeurs admis",
    "value": "Uniquement des particuliers au lancement : le droit européen de rétractation de 14 jours applicable aux achats de consommateurs auprès de professionnels ne se pose donc pas au départ. Marchands et galeries partenaires viendront dans une phase suivante. Le statut professionnel éventuel des annonces des fondateurs sera examiné avec l’avocat."
  },
  "A6": {
    "label": "Catégories et premières ventes",
    "value": "Lancement par la photographie : tirages et éditions limitées pouvant être réimprimés ou remplacés en cas de perte ou de dommage, d’abord auprès de photographes connus du fondateur. Un partenariat avec un service d’impression à liens utilisables une seule fois est à l’étude. Œuvres numériques, expériences et cours en ligne sont des options ultérieures. Art japonais, arts d’Asie, design et objets illustrent des phases suivantes dans la démo."
  },
  "A7": {
    "label": "Normes de description",
    "value": "Les attributions suivent le vocabulaire du décret Marcus ; le formulaire avertit lorsqu’un terme à portée juridique est employé, tel que signé, attribué à, école de ou d’après. Les descriptions sont les déclarations du vendeur, sous sa responsabilité. Les certificats et résultats de ventes antérieures sont joints à la provenance. Aucune authentification par IA."
  },
  "A8": {
    "label": "Garantie et litiges",
    "value": "Garantie « conforme à la description » : un écart substantiel peut être signalé dans les 30 jours suivant la livraison pour obtenir un remboursement intégral ; ARTIQUE assure la médiation. Il s’agit d’une politique propre à ARTIQUE, et non d’une obligation légale. Un alignement sur 14 jours est envisagé."
  },
  "A9": {
    "label": "Objets interdits ou réglementés",
    "value": "À ce stade, aucun ivoire, écaille de tortue, corail ou autre matériau relevant de la CITES (réglementation européenne sur l’ivoire). Aucune lame de sabre ; les garnitures, telles que les tsuba, sont admises. Aucun bien classé au titre du patrimoine au Japon ou en France, ni arme à feu. Les netsuke en ivoire sont exclus, même anciens."
  },
  "B1": {
    "label": "Format des ventes",
    "value": "Ventes thématiques en ligne à durée déterminée uniquement, sans retransmission en direct ; période d’enchères de 10 jours."
  },
  "B2": {
    "label": "Clôture fixe",
    "value": "Heure de clôture fixe, sans prolongation, pour privilégier la simplicité. Les lots se clôturent successivement à 60 secondes d’intervalle. Ce choix pourra être revu après les premières ventes."
  },
  "B3": {
    "label": "Estimations, mise à prix et réserve",
    "value": "Le vendeur fixe la mise à prix et peut définir une réserve confidentielle ainsi qu’un prix d’achat immédiat facultatif. Une enchère au prix d’achat immédiat clôture le lot sur-le-champ. L’estimation est facultative. ARTIQUE n’impose aucun minimum."
  },
  "B4": {
    "label": "Échelons d’enchère",
    "value": "Moins de 100 € : 5 € · 100–299 € : 10 € · 300–499 € : 20 € · 500–999 € : 50 € · 1 000–2 999 € : 100 € · 3 000–4 999 € : 200 € · 5 000–9 999 € : 500 € · 10 000–19 999 € : 1 000 € · À partir de 20 000 € : 2 000 €"
  },
  "B5": {
    "label": "Enchères maximales automatiques",
    "value": "Disponibles. Le système enchérit pour le compte du participant jusqu’à son plafond, un échelon au-dessus de l’enchère concurrente."
  },
  "B6": {
    "label": "Retrait d’une enchère",
    "value": "Non autorisé. Un retrait ou un défaut de paiement entraîne une pénalité ; les récidives conduisent à la fermeture du compte, comme sur Mercari ou eBay."
  },
  "B7": {
    "label": "Frais",
    "value": "Frais acheteur provisoirement fixés à 25 % du prix d’adjudication HT, soit 30 % TTC avec une TVA de 20 %, selon les niveaux du marché français : environ 25 % HT dans les maisons Drouot, environ 28 % sur la première tranche chez Christie’s et Sotheby’s. Commission vendeur de 12 % HT. Aucun frais de mise en vente ni frais d’invendu. Les taux définitifs seront arrêtés avec le budget de lancement."
  },
  "B8": {
    "label": "Délai et moyens de paiement",
    "value": "Paiement dans les 3 jours suivant la clôture, par carte ou PayPal sur la page hébergée du prestataire. Ces deux moyens sont retenus pour simplifier la gestion et limiter les erreurs."
  },
  "B9": {
    "label": "Règlement du vendeur",
    "value": "Le vendeur est payé uniquement après réception, jamais sur la seule expédition. Les confirmations reçues avant la fin du mois sont réglées ensemble le 15 du mois suivant. Réception présumée : la livraison confirmée par le suivi, suivie de 14 jours sans réclamation, vaut confirmation de réception (Catawiki débloque les fonds 3 jours après la livraison suivie), ce qui maintient chaque règlement dans le délai de 90 jours imposé par le prestataire de paiement."
  },
  "B10": {
    "label": "Livraison",
    "value": "Au lancement, seules les photographies sont expédiées, par courrier suivi ou transporteur, emballées par le vendeur. Celui-ci fixe les frais par lot, inclus dans le total acheteur. Une remise en personne est possible avec l’accord des deux parties."
  },
  "B11": {
    "label": "Droit de rétractation et retours",
    "value": "Le droit européen accorde au consommateur achetant auprès d’un professionnel un droit de rétractation de 14 jours. Les lots de particuliers relèvent uniquement de la garantie « conforme à la description ». Cette distinction figure sur chaque lot. Depuis le 19 juin 2026, les vendeurs professionnels doivent également proposer le bouton européen « Se rétracter du contrat ici » ; ARTIQUE le mettra à disposition lorsque les professionnels seront admis et vérifiera avec un conseil juridique si ses propres frais acheteur nécessitent aussi un tel bouton. Aucun vendeur professionnel au lancement, voir A5."
  },
  "B12": {
    "label": "Inscription des enchérisseurs et vérification d’identité",
    "value": "Plafond de 9 999 € par lot pour les enchères et les achats immédiats. Chaque transaction reste ainsi sous le seuil de 10 000 € de lutte contre le blanchiment applicable au marché de l’art, mais les transactions liées sont également prises en compte : achats cumulés d’un même acheteur, paiements fractionnés et série de lots d’un même vendeur. ARTIQUE suit donc les montants cumulés et exige une vérification d’identité lorsque les transactions liées d’un acheteur ou d’un vendeur atteignent 10 000 € ; le contrôle des listes de sanctions s’applique dès le premier euro. Adresse électronique, téléphone et carte enregistrés avant la première enchère."
  },
  "C1": {
    "label": "Prestataire de paiement",
    "value": "Stripe Connect est confirmé comme utilisable pour une société française et constitue le prestataire principal (cartes de l’EEE : 1,5 % + 0,25 €). PayPal pourra être ajouté ultérieurement : son tarif marchand en France est de 2,90 % + 0,35 €, et sa solution pour plateformes multipartites nécessite l’accord de PayPal. La démonstration n’est pas connectée ; le paiement est simulé."
  },
  "C2": {
    "label": "Circuit des fonds",
    "value": "L’acheteur règle sur la page du prestataire. Les fonds restent chez le prestataire agréé Stripe jusqu’au versement ; ARTIQUE ne détient jamais les fonds des clients sur son propre compte bancaire. Les règlements mensuels aux vendeurs passent par le prestataire ; le compte ARTIQUE ne reçoit que ses commissions. Catawiki utilise cette structure avec Stripe."
  },
  "C3": {
    "label": "Droit de suite",
    "value": "À la charge du vendeur, selon le principe légal français. Applicable aux œuvres originales et éditions limitées d’artistes vivants ou décédés depuis moins de 70 ans, dès 750 €, à 4 % sur la première tranche. Mention sur les lots concernés."
  },
  "C4": {
    "label": "Affichage de la TVA",
    "value": "TVA de 20 % sur les frais ARTIQUE, toujours présentés TTC. La TVA sur le bien dépend du vendeur : aucune pour un particulier ; régime de la marge ou taux de 5,5 % pour un professionnel. Le régime est signalé par lot."
  },
  "C5": {
    "label": "Monnaie",
    "value": "EUR uniquement pour les enchères, l’affichage et le règlement. Aucune conversion en devises étrangères."
  },
  "D1": {
    "label": "Hébergement",
    "value": "Production dans l’UE : application sur un hébergeur en périphérie de réseau et base de données dans une région UE, Paris ou Francfort, même si la décision européenne d’adéquation pour le Japon permet un accès depuis ce pays. Démonstration statique sur GitHub Pages."
  },
  "D2": {
    "label": "Données personnelles",
    "value": "Collecte et conservation minimales : aucune donnée de carte grâce aux pages de paiement hébergées, aucun document d’identité au lancement (B12), profil minimal, stockage dans l’UE et panneau de consentement conforme aux recommandations de la CNIL."
  },
  "D3": {
    "label": "Rôle de l’IA (Claude)",
    "value": "L’IA aide le vendeur à rédiger une annonce, qu’il modifie et publie, présélectionne les annonces et enchères suspectes, notamment objets interdits et schémas de blanchiment, et répond en première ligne dans un chat identifié comme IA (article 50 du règlement européen sur l’IA). Elle ne traduit pas les annonces et n’authentifie pas les œuvres. Les litiges sont toujours tranchés par des humains."
  },
  "D4": {
    "label": "Images",
    "value": "Les vendeurs photographient leurs biens selon des exigences minimales publiées. ARTIQUE ne photographie pas et ne reçoit pas les objets. Les images de la démonstration sont des œuvres du domaine public du Metropolitan Museum of Art (CC0)."
  },
  "D5": {
    "label": "Horaires de l’assistance",
    "value": "Courriel et messagerie du site en FR / EN / JA ; réponse sous un jour ouvré, heure de Paris. Assistance assurée depuis le Japon (JST en avance de 7 à 8 heures sur Paris)."
  },
  "D6": {
    "label": "Notifications et mesure d’audience",
    "value": "Courriels en cas de surenchère, adjudication, paiement et expédition. Mesure d’audience respectueuse de la vie privée, sans suivi intersites ; bandeau cookies uniquement pour les cookies non essentiels."
  },
  "D7": {
    "label": "Contrat et budget de l’IA",
    "value": "API Anthropic facturée à l’usage, avec accord de traitement des données. Le budget dépend des volumes attendus ; le coût minimal de fonctionnement du site et une estimation du coût de l’IA figurent dans le document de planification."
  },
  "E1": {
    "label": "Nature de la démonstration",
    "value": "URL publique sur GitHub Pages. Aucune donnée personnelle n’est affichée ; l’accès public est donc acceptable."
  },
  "E2": {
    "label": "Commandes de démonstration",
    "value": "Un petit panneau permet de réinitialiser la démonstration, de clôturer immédiatement un lot pour découvrir la fin de vente et le paiement, et de déclencher une enchère concurrente."
  },
  "E3": {
    "label": "Données des lots",
    "value": "Les images et les informations de base proviennent des notices en accès libre du Met. Estimations, provenances, rapports d’état et enchérisseurs sont des exemples créés pour la démonstration."
  },
  "A10": {
    "label": "Examen des annonces",
    "value": "Au lancement, le fondateur examine la recevabilité des annonces. Des spécialistes extérieurs interviendront plus tard."
  },
  "B13": {
    "label": "Formalités d’exportation et d’importation",
    "value": "Sans objet au lancement, la livraison restant dans l’UE. À réexaminer avant toute livraison hors de l’UE."
  }
};

export const trustPillars = [
  { title: l('Des vendeurs responsables', 'Accountable sellers', '責任ある出品者'), body: l('Le vendeur décrit et publie sous sa responsabilité. ARTIQUE examine la recevabilité et propose un guide de vocabulaire.', 'Sellers describe and publish under their responsibility. ARTIQUE checks admissibility and offers a vocabulary guide.', '出品者が責任を持って記述・公開します。ARTIQUEは受理可否を審査し、用語ガイドを提供します。') },
  { title: l('Des états documentés', 'Documented condition', '状態の透明性'), body: l('Photographies, dimensions et rapports d’état accompagnent chaque lot. L’usure fait partie de son histoire.', 'Photographs, dimensions and a condition report accompany every lot. Wear is part of an object’s history.', '写真、寸法、状態報告を各ロットに添えます。経年変化も作品の歴史として伝えます。') },
  { title: l('Des frais lisibles', 'Clear fees', '明確な手数料'), body: l('Le prix d’adjudication, les frais et leur TVA sont distingués avant toute enchère.', 'Hammer price, premium and VAT are set out separately before you bid.', '入札前に落札価格、手数料、手数料にかかるVATを分けて表示します。') },
  { title: l('Une relation suivie', 'Accountable care', '取引後も続く対応'), body: l('L’équipe accompagne acheteurs et vendeurs, de la première question jusqu’à la livraison et au règlement.', 'The team supports buyers and sellers from the first enquiry through delivery and settlement.', '最初の相談から配送と精算まで、買主と売主を担当チームが支えます。') },
  { title: l('Une conformité attentive', 'Responsible stewardship', '責任ある流通'), body: l('Provenance, matériaux réglementés et obligations européennes sont examinés avant la mise en vente.', 'Provenance, regulated materials and European requirements are reviewed before a work enters a sale.', '来歴、規制対象素材、欧州の要件を出品前に確認します。') },
];

export const teamRoles = [
  { title: l('Spécialiste', 'Specialist', '専門家'), body: l('Conseil et guide de vocabulaire ; spécialistes extérieurs dans une phase suivante.', 'Advice and vocabulary guidance; outside specialists in a later phase.', '助言と用語ガイド。外部専門家は次の段階で参加します。') },
  { title: l('Ventes', 'Sales', 'セールス'), body: l('Relations collectionneurs, dépôts et suivi des transactions.', 'Collector relationships, consignments and sale follow-up.', 'コレクターとの関係、出品相談、取引のサポート。') },
  { title: l('Technique', 'IT', '技術'), body: l('Une plateforme accessible, fiable et respectueuse des données.', 'An accessible, dependable platform with care for personal data.', '使いやすさ、安定性、個人データへの配慮。') },
  { title: l('Presse', 'Press', '広報'), body: l('Relations médias, contenus éditoriaux et dialogue culturel.', 'Media relationships, editorial work and cultural dialogue.', 'メディア対応、編集、文化的な対話。') },
];

export const legalSections = [
  { title: l('Identité de l’exploitant', 'Identity of the operator', '運営者情報'), body: l('ARTIQUE est un projet de SAS française distincte établie à Paris. La raison sociale, le capital, l’immatriculation, l’adresse et les coordonnées du responsable de publication seront ajoutés après constitution.', 'ARTIQUE is a proposed separate French SAS based in Paris. Its registered name, capital, registration, address and publication contact will be added after incorporation.', 'ARTIQUE専用のフランス法人SASをパリに設立する構想です。商号、資本金、登記、所在地、発行責任者は設立後に記載します。') },
  { title: l('Nature du service', 'Nature of the service', 'サービスの性質'), body: l('La vente se conclut automatiquement entre le vendeur et le meilleur enchérisseur à l’heure de clôture fixe. ARTIQUE est un intermédiaire de courtage aux enchères par voie électronique : elle ne rédige ni ne certifie les descriptions. Le vendeur écrit et publie sous sa responsabilité ; ARTIQUE vérifie uniquement la recevabilité. Ce statut doit être validé par un conseil juridique français.', 'The sale is concluded automatically between the seller and the highest bidder at the fixed closing time. ARTIQUE is an electronic auction brokerage intermediary and does not author or certify descriptions. Sellers write and publish under their responsibility; ARTIQUE checks admissibility only. This status must be validated by French counsel.', '固定の終了時刻に売主と最高額入札者の間で売買が自動的に成立します。ARTIQUEは電子的な競りの仲介者であり、記述の作成や保証をしません。出品者自身の責任で記述・公開し、ARTIQUEは受理可否のみを確認します。法的形態はフランスの弁護士の確認が必要です。') },
  { title: l('Frais et règlement', 'Fees and settlement', '手数料と精算'), body: l('Les frais, leur TVA, la livraison fixée par le vendeur et le total sont affichés avant achat. Paiement par carte ou PayPal sous trois jours. Les fonds restent chez le prestataire de paiement ; ARTIQUE ne détient jamais les fonds des clients. Conditions définitives à rédiger.', 'Fees, VAT, seller-set shipping and totals are shown before purchase. Payment by card or PayPal within three days. Funds remain with the payment provider; ARTIQUE never holds client money. Final terms remain to be drafted.', '購入前に手数料、VAT、出品者設定の送料、合計を表示します。3日以内にカードまたはPayPalで支払います。資金は決済事業者に留まり、ARTIQUEは顧客資金を預かりません。正式条件は今後作成します。') },
  { title: l('Rétractation et litiges', 'Withdrawal and disputes', '撤回権と紛争'), body: l('Le droit de rétractation de 14 jours concerne les achats de consommateurs auprès de professionnels ; aucun professionnel au lancement. Les ventes entre particuliers relèvent uniquement de la garantie « conforme à la description » envisagée. Médiation et juridiction compétente à préciser.', 'The 14-day consumer withdrawal right concerns professional sellers only; there are none at launch. Private sales have only the proposed as-described guarantee. Mediation and competent jurisdiction remain to be specified.', '14日間の消費者の撤回権は業者出品のみが対象で、立ち上げ時は該当しません。個人出品には想定する「記述どおり」保証のみが適用されます。調停方法と管轄は今後定めます。') },
  { title: l('Données personnelles dans l’Union européenne', 'Personal data in the European Union', 'EU域内の個人データ'), body: l('En production, les données minimales seront hébergées dans l’UE. Aucune donnée de carte ni pièce d’identité conservée au lancement. Finalités, durées de conservation et droits seront détaillés. La démo conserve uniquement les saisies fictives dans votre navigateur, sans les transmettre.', 'Minimal production data will be hosted in the EU. No card details or identity documents are retained at launch. Purposes, retention and rights will be documented. The demo stores fictional entries only in your browser without transmitting them.', '本番の最小限のデータはEU内で保管します。立ち上げ時にカード情報や本人確認書類は保持しません。利用目的、保存期間、権利は今後明記します。デモの架空の入力はブラウザ内のみで送信しません。') },
  { title: l('Cookies et stockage local', 'Cookies and local storage', 'Cookieとローカル保存'), body: l('La démo utilise uniquement le stockage local nécessaire à la langue, aux enchères et à vos choix. Aucun outil de mesure d’audience ni traceur publicitaire. Les polices Google Fonts sont chargées à distance. La réinitialisation efface la simulation.', 'The demo uses essential local storage for language, bids and your choices. There are no analytics or advertising trackers. Google Fonts load remotely. Reset clears the simulation.', 'デモでは言語、入札、選択内容に必要なローカル保存のみを使います。アクセス解析や広告追跡はありません。Google Fontsは外部から読み込みます。リセットでシミュレーションを消去できます。') },
];
export const additionalTerms = [
  { title: l('Plafond par lot', 'Price cap', 'ロットごとの上限'), body: l(`Enchères, plafonds automatiques et prix d’achat immédiat sont limités à 9 999 € par lot. ${fr.linkedTransactionsText}`, `Bids, proxy maxima and buy-now prices are capped at €9,999 per lot. ${en.linkedTransactionsText}`, `入札、自動入札の上限、即決価格は1ロット€9,999までです。${ja.linkedTransactionsText}`) },
  { title: l('Achat immédiat', 'Buy-now', '即決購入'), body: l('Lorsqu’il est proposé, l’achat immédiat clôture le lot au prix fixé par le vendeur, tant que le lot est ouvert et que l’enchère actuelle reste inférieure.', 'Where offered, buy-now closes the lot at the seller’s stated price while the lot is open and the current bid is below that price.', 'ロットが終了前で現在の入札が即決価格未満の場合、提示された即決価格で購入するとその場で終了します。') },
  { title: l('Clôture sans prolongation', 'No extension', '延長なし'), body: l('La clôture est fixe. Une enchère reçue dans les dernières secondes ne prolonge pas le délai.', 'Closing is fixed. A bid in the last seconds does not extend the closing time.', '終了時刻は固定です。終了直前の入札でも延長しません。') },
  { title: l('Calendrier de règlement des vendeurs', 'Payout schedule', '出品者への支払日程'), body: l('Le vendeur est payé uniquement après confirmation de réception par l’acheteur. Les confirmations reçues avant la fin du mois sont réglées ensemble le 15 du mois suivant, par le prestataire. La livraison confirmée par le suivi, suivie de 14 jours sans réclamation, vaut confirmation de réception.', 'Sellers are paid only after the buyer confirms receipt. Confirmations received by month-end are paid together on the 15th of the following month through the payment provider. Tracked delivery followed by 14 days without a complaint counts as confirmation of receipt.', '買主の受領確認後のみ支払います。月末までの確認分を翌月15日に決済事業者からまとめて送金します。配送追跡で配達済みとなり、その後14日間異議がなければ、受領確認とみなします。') },
];
