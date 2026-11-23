import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addToCollectionHandler,
  calculateAbsoluteHandler,
  calculateAdditionHandler,
  calculateAverageHandler,
  calculateCosineHandler,
  calculateDivisionHandler,
  calculateLogarithmHandler,
  calculateMedianHandler,
  calculateMinMaxHandler,
  calculateModuloHandler,
  calculateMultiplicationHandler,
  calculateNthRootHandler,
  calculatePowerHandler,
  calculateSineHandler,
  calculateSquareRootHandler,
  calculateSubtractionHandler,
  calculateSumHandler,
  calculateTangentHandler,
  calculateVarianceHandler,
  collectionContainsNumberHandler,
  collectionContainsStringHandler,
  collectionEndsWithStringHandler,
  collectionStartsWithStringHandler,
  collectionToJsonHandler,
  collectionToXmlHandler,
  compareStringsHandler,
  containsStringHandler,
  convertAngleHandler,
  convertAreaHandler,
  convertCaseHandler,
  convertCurrencyHandler,
  convertDistanceHandler,
  convertDurationHandler,
  convertEnergyHandler,
  convertImageHandler,
  convertPowerHandler,
  convertSpeedHandler,
  convertTemperatureHandler,
  convertVolumeHandler,
  convertWeightHandler,
  countCollectionHandler,
  cropImageHandler,
  csVtoJsonHandler,
  dateTimeDifferenceHandler,
  dateTimeInfoHandler,
  decodeStringHandler,
  encodeStringHandler,
  fileToStringHandler,
  filterCollectionHandler,
  flipImageHandler,
  formatCurrencyHandler,
  formatDateTimeHandler,
  generateGuidHandler,
  generateHashHandler,
  generateQrCodeHandler,
  joinStringsHandler,
  jsoNtoCsvHandler,
  jsoNtoHtmlHandler,
  jsoNtoXmlHandler,
  marketIndexHandler,
  queryJsonHandler,
  queryXmlHandler,
  randomNumberHandler,
  redactStringHandler,
  removeFromCollectionHandler,
  replaceStringHandler,
  replaceValuesInCollectionHandler,
  resizeImageHandler,
  rotateImageHandler,
  roundNumberHandler,
  shortenLinkHandler,
  sortCollectionHandler,
  speechToTextHandler,
  splitCollectionHandler,
  splitStringHandler,
  standardDeviationHandler,
  stockPricesHandler,
  stringToFileHandler,
  textToSpeechHandler,
  translateStringHandler,
  trimStringHandler,
  urlDecodeHandler,
  urlEncodeHandler,
  validateEmailHandler,
  verifyHashHandler,
  watermarkImageHandler,
  worldTimeHandler,
  xmLtoJsonHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addToCollectionHandler)
  .route('/', csVtoJsonHandler)
  .route('/', calculateAbsoluteHandler)
  .route('/', calculateAdditionHandler)
  .route('/', calculateAverageHandler)
  .route('/', calculateCosineHandler)
  .route('/', calculateDivisionHandler)
  .route('/', calculateLogarithmHandler)
  .route('/', calculateMedianHandler)
  .route('/', calculateMinMaxHandler)
  .route('/', calculateModuloHandler)
  .route('/', calculateMultiplicationHandler)
  .route('/', calculateNthRootHandler)
  .route('/', calculatePowerHandler)
  .route('/', calculateSineHandler)
  .route('/', calculateSquareRootHandler)
  .route('/', calculateSubtractionHandler)
  .route('/', calculateSumHandler)
  .route('/', calculateTangentHandler)
  .route('/', calculateVarianceHandler)
  .route('/', collectionContainsNumberHandler)
  .route('/', collectionContainsStringHandler)
  .route('/', collectionEndsWithStringHandler)
  .route('/', collectionStartsWithStringHandler)
  .route('/', collectionToJsonHandler)
  .route('/', collectionToXmlHandler)
  .route('/', compareStringsHandler)
  .route('/', containsStringHandler)
  .route('/', convertAngleHandler)
  .route('/', convertAreaHandler)
  .route('/', convertCaseHandler)
  .route('/', convertCurrencyHandler)
  .route('/', convertDistanceHandler)
  .route('/', convertDurationHandler)
  .route('/', convertEnergyHandler)
  .route('/', convertImageHandler)
  .route('/', convertPowerHandler)
  .route('/', convertSpeedHandler)
  .route('/', convertTemperatureHandler)
  .route('/', convertVolumeHandler)
  .route('/', convertWeightHandler)
  .route('/', countCollectionHandler)
  .route('/', cropImageHandler)
  .route('/', dateTimeDifferenceHandler)
  .route('/', dateTimeInfoHandler)
  .route('/', decodeStringHandler)
  .route('/', encodeStringHandler)
  .route('/', fileToStringHandler)
  .route('/', filterCollectionHandler)
  .route('/', flipImageHandler)
  .route('/', formatCurrencyHandler)
  .route('/', formatDateTimeHandler)
  .route('/', generateGuidHandler)
  .route('/', generateHashHandler)
  .route('/', generateQrCodeHandler)
  .route('/', jsoNtoCsvHandler)
  .route('/', jsoNtoHtmlHandler)
  .route('/', jsoNtoXmlHandler)
  .route('/', joinStringsHandler)
  .route('/', marketIndexHandler)
  .route('/', queryJsonHandler)
  .route('/', queryXmlHandler)
  .route('/', randomNumberHandler)
  .route('/', redactStringHandler)
  .route('/', removeFromCollectionHandler)
  .route('/', replaceStringHandler)
  .route('/', replaceValuesInCollectionHandler)
  .route('/', resizeImageHandler)
  .route('/', rotateImageHandler)
  .route('/', roundNumberHandler)
  .route('/', shortenLinkHandler)
  .route('/', sortCollectionHandler)
  .route('/', speechToTextHandler)
  .route('/', splitCollectionHandler)
  .route('/', splitStringHandler)
  .route('/', standardDeviationHandler)
  .route('/', stockPricesHandler)
  .route('/', stringToFileHandler)
  .route('/', textToSpeechHandler)
  .route('/', translateStringHandler)
  .route('/', trimStringHandler)
  .route('/', urlDecodeHandler)
  .route('/', urlEncodeHandler)
  .route('/', validateEmailHandler)
  .route('/', verifyHashHandler)
  .route('/', watermarkImageHandler)
  .route('/', worldTimeHandler)
  .route('/', xmLtoJsonHandler)

export default app
