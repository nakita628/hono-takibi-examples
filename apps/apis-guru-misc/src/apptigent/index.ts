import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAddToCollectionRoute,
  postCalculateAbsoluteRoute,
  postCalculateAdditionRoute,
  postCalculateAverageRoute,
  postCalculateCosineRoute,
  postCalculateDivisionRoute,
  postCalculateLogarithmRoute,
  postCalculateMedianRoute,
  postCalculateMinMaxRoute,
  postCalculateModuloRoute,
  postCalculateMultiplicationRoute,
  postCalculateNthRootRoute,
  postCalculatePowerRoute,
  postCalculateSineRoute,
  postCalculateSquareRootRoute,
  postCalculateSubtractionRoute,
  postCalculateSumRoute,
  postCalculateTangentRoute,
  postCalculateVarianceRoute,
  postCollectionContainsNumberRoute,
  postCollectionContainsStringRoute,
  postCollectionEndsWithStringRoute,
  postCollectionStartsWithStringRoute,
  postCollectionToJSONRoute,
  postCollectionToXMLRoute,
  postCompareStringsRoute,
  postContainsStringRoute,
  postConvertAngleRoute,
  postConvertAreaRoute,
  postConvertCaseRoute,
  postConvertCurrencyRoute,
  postConvertDistanceRoute,
  postConvertDurationRoute,
  postConvertEnergyRoute,
  postConvertImageRoute,
  postConvertPowerRoute,
  postConvertSpeedRoute,
  postConvertTemperatureRoute,
  postConvertVolumeRoute,
  postConvertWeightRoute,
  postCountCollectionRoute,
  postCropImageRoute,
  postCSVtoJSONRoute,
  postDateTimeDifferenceRoute,
  postDateTimeInfoRoute,
  postDecodeStringRoute,
  postEncodeStringRoute,
  postFileToStringRoute,
  postFilterCollectionRoute,
  postFlipImageRoute,
  postFormatCurrencyRoute,
  postFormatDateTimeRoute,
  postGenerateGuidRoute,
  postGenerateHashRoute,
  postGenerateQRCodeRoute,
  postJoinStringsRoute,
  postJSONtoCSVRoute,
  postJSONtoHTMLRoute,
  postJSONtoXMLRoute,
  postMarketIndexRoute,
  postQueryJSONRoute,
  postQueryXMLRoute,
  postRandomNumberRoute,
  postRedactStringRoute,
  postRemoveFromCollectionRoute,
  postReplaceStringRoute,
  postReplaceValuesInCollectionRoute,
  postResizeImageRoute,
  postRotateImageRoute,
  postRoundNumberRoute,
  postShortenLinkRoute,
  postSortCollectionRoute,
  postSpeechToTextRoute,
  postSplitCollectionRoute,
  postSplitStringRoute,
  postStandardDeviationRoute,
  postStockPricesRoute,
  postStringToFileRoute,
  postTextToSpeechRoute,
  postTranslateStringRoute,
  postTrimStringRoute,
  postURLDecodeRoute,
  postURLEncodeRoute,
  postValidateEmailRoute,
  postVerifyHashRoute,
  postWatermarkImageRoute,
  postWorldTimeRoute,
  postXMLtoJSONRoute,
} from './routes'
import {
  postAddToCollectionRouteHandler,
  postCalculateAbsoluteRouteHandler,
  postCalculateAdditionRouteHandler,
  postCalculateAverageRouteHandler,
  postCalculateCosineRouteHandler,
  postCalculateDivisionRouteHandler,
  postCalculateLogarithmRouteHandler,
  postCalculateMedianRouteHandler,
  postCalculateMinMaxRouteHandler,
  postCalculateModuloRouteHandler,
  postCalculateMultiplicationRouteHandler,
  postCalculateNthRootRouteHandler,
  postCalculatePowerRouteHandler,
  postCalculateSineRouteHandler,
  postCalculateSquareRootRouteHandler,
  postCalculateSubtractionRouteHandler,
  postCalculateSumRouteHandler,
  postCalculateTangentRouteHandler,
  postCalculateVarianceRouteHandler,
  postCollectionContainsNumberRouteHandler,
  postCollectionContainsStringRouteHandler,
  postCollectionEndsWithStringRouteHandler,
  postCollectionStartsWithStringRouteHandler,
  postCollectionToJSONRouteHandler,
  postCollectionToXMLRouteHandler,
  postCompareStringsRouteHandler,
  postContainsStringRouteHandler,
  postConvertAngleRouteHandler,
  postConvertAreaRouteHandler,
  postConvertCaseRouteHandler,
  postConvertCurrencyRouteHandler,
  postConvertDistanceRouteHandler,
  postConvertDurationRouteHandler,
  postConvertEnergyRouteHandler,
  postConvertImageRouteHandler,
  postConvertPowerRouteHandler,
  postConvertSpeedRouteHandler,
  postConvertTemperatureRouteHandler,
  postConvertVolumeRouteHandler,
  postConvertWeightRouteHandler,
  postCountCollectionRouteHandler,
  postCropImageRouteHandler,
  postCSVtoJSONRouteHandler,
  postDateTimeDifferenceRouteHandler,
  postDateTimeInfoRouteHandler,
  postDecodeStringRouteHandler,
  postEncodeStringRouteHandler,
  postFileToStringRouteHandler,
  postFilterCollectionRouteHandler,
  postFlipImageRouteHandler,
  postFormatCurrencyRouteHandler,
  postFormatDateTimeRouteHandler,
  postGenerateGuidRouteHandler,
  postGenerateHashRouteHandler,
  postGenerateQRCodeRouteHandler,
  postJoinStringsRouteHandler,
  postJSONtoCSVRouteHandler,
  postJSONtoHTMLRouteHandler,
  postJSONtoXMLRouteHandler,
  postMarketIndexRouteHandler,
  postQueryJSONRouteHandler,
  postQueryXMLRouteHandler,
  postRandomNumberRouteHandler,
  postRedactStringRouteHandler,
  postRemoveFromCollectionRouteHandler,
  postReplaceStringRouteHandler,
  postReplaceValuesInCollectionRouteHandler,
  postResizeImageRouteHandler,
  postRotateImageRouteHandler,
  postRoundNumberRouteHandler,
  postShortenLinkRouteHandler,
  postSortCollectionRouteHandler,
  postSpeechToTextRouteHandler,
  postSplitCollectionRouteHandler,
  postSplitStringRouteHandler,
  postStandardDeviationRouteHandler,
  postStockPricesRouteHandler,
  postStringToFileRouteHandler,
  postTextToSpeechRouteHandler,
  postTranslateStringRouteHandler,
  postTrimStringRouteHandler,
  postURLDecodeRouteHandler,
  postURLEncodeRouteHandler,
  postValidateEmailRouteHandler,
  postVerifyHashRouteHandler,
  postWatermarkImageRouteHandler,
  postWorldTimeRouteHandler,
  postXMLtoJSONRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAddToCollectionRoute, postAddToCollectionRouteHandler)
  .openapi(postCSVtoJSONRoute, postCSVtoJSONRouteHandler)
  .openapi(postCalculateAbsoluteRoute, postCalculateAbsoluteRouteHandler)
  .openapi(postCalculateAdditionRoute, postCalculateAdditionRouteHandler)
  .openapi(postCalculateAverageRoute, postCalculateAverageRouteHandler)
  .openapi(postCalculateCosineRoute, postCalculateCosineRouteHandler)
  .openapi(postCalculateDivisionRoute, postCalculateDivisionRouteHandler)
  .openapi(postCalculateLogarithmRoute, postCalculateLogarithmRouteHandler)
  .openapi(postCalculateMedianRoute, postCalculateMedianRouteHandler)
  .openapi(postCalculateMinMaxRoute, postCalculateMinMaxRouteHandler)
  .openapi(postCalculateModuloRoute, postCalculateModuloRouteHandler)
  .openapi(postCalculateMultiplicationRoute, postCalculateMultiplicationRouteHandler)
  .openapi(postCalculateNthRootRoute, postCalculateNthRootRouteHandler)
  .openapi(postCalculatePowerRoute, postCalculatePowerRouteHandler)
  .openapi(postCalculateSineRoute, postCalculateSineRouteHandler)
  .openapi(postCalculateSquareRootRoute, postCalculateSquareRootRouteHandler)
  .openapi(postCalculateSubtractionRoute, postCalculateSubtractionRouteHandler)
  .openapi(postCalculateSumRoute, postCalculateSumRouteHandler)
  .openapi(postCalculateTangentRoute, postCalculateTangentRouteHandler)
  .openapi(postCalculateVarianceRoute, postCalculateVarianceRouteHandler)
  .openapi(postCollectionContainsNumberRoute, postCollectionContainsNumberRouteHandler)
  .openapi(postCollectionContainsStringRoute, postCollectionContainsStringRouteHandler)
  .openapi(postCollectionEndsWithStringRoute, postCollectionEndsWithStringRouteHandler)
  .openapi(postCollectionStartsWithStringRoute, postCollectionStartsWithStringRouteHandler)
  .openapi(postCollectionToJSONRoute, postCollectionToJSONRouteHandler)
  .openapi(postCollectionToXMLRoute, postCollectionToXMLRouteHandler)
  .openapi(postCompareStringsRoute, postCompareStringsRouteHandler)
  .openapi(postContainsStringRoute, postContainsStringRouteHandler)
  .openapi(postConvertAngleRoute, postConvertAngleRouteHandler)
  .openapi(postConvertAreaRoute, postConvertAreaRouteHandler)
  .openapi(postConvertCaseRoute, postConvertCaseRouteHandler)
  .openapi(postConvertCurrencyRoute, postConvertCurrencyRouteHandler)
  .openapi(postConvertDistanceRoute, postConvertDistanceRouteHandler)
  .openapi(postConvertDurationRoute, postConvertDurationRouteHandler)
  .openapi(postConvertEnergyRoute, postConvertEnergyRouteHandler)
  .openapi(postConvertImageRoute, postConvertImageRouteHandler)
  .openapi(postConvertPowerRoute, postConvertPowerRouteHandler)
  .openapi(postConvertSpeedRoute, postConvertSpeedRouteHandler)
  .openapi(postConvertTemperatureRoute, postConvertTemperatureRouteHandler)
  .openapi(postConvertVolumeRoute, postConvertVolumeRouteHandler)
  .openapi(postConvertWeightRoute, postConvertWeightRouteHandler)
  .openapi(postCountCollectionRoute, postCountCollectionRouteHandler)
  .openapi(postCropImageRoute, postCropImageRouteHandler)
  .openapi(postDateTimeDifferenceRoute, postDateTimeDifferenceRouteHandler)
  .openapi(postDateTimeInfoRoute, postDateTimeInfoRouteHandler)
  .openapi(postDecodeStringRoute, postDecodeStringRouteHandler)
  .openapi(postEncodeStringRoute, postEncodeStringRouteHandler)
  .openapi(postFileToStringRoute, postFileToStringRouteHandler)
  .openapi(postFilterCollectionRoute, postFilterCollectionRouteHandler)
  .openapi(postFlipImageRoute, postFlipImageRouteHandler)
  .openapi(postFormatCurrencyRoute, postFormatCurrencyRouteHandler)
  .openapi(postFormatDateTimeRoute, postFormatDateTimeRouteHandler)
  .openapi(postGenerateGuidRoute, postGenerateGuidRouteHandler)
  .openapi(postGenerateHashRoute, postGenerateHashRouteHandler)
  .openapi(postGenerateQRCodeRoute, postGenerateQRCodeRouteHandler)
  .openapi(postJSONtoCSVRoute, postJSONtoCSVRouteHandler)
  .openapi(postJSONtoHTMLRoute, postJSONtoHTMLRouteHandler)
  .openapi(postJSONtoXMLRoute, postJSONtoXMLRouteHandler)
  .openapi(postJoinStringsRoute, postJoinStringsRouteHandler)
  .openapi(postMarketIndexRoute, postMarketIndexRouteHandler)
  .openapi(postQueryJSONRoute, postQueryJSONRouteHandler)
  .openapi(postQueryXMLRoute, postQueryXMLRouteHandler)
  .openapi(postRandomNumberRoute, postRandomNumberRouteHandler)
  .openapi(postRedactStringRoute, postRedactStringRouteHandler)
  .openapi(postRemoveFromCollectionRoute, postRemoveFromCollectionRouteHandler)
  .openapi(postReplaceStringRoute, postReplaceStringRouteHandler)
  .openapi(postReplaceValuesInCollectionRoute, postReplaceValuesInCollectionRouteHandler)
  .openapi(postResizeImageRoute, postResizeImageRouteHandler)
  .openapi(postRotateImageRoute, postRotateImageRouteHandler)
  .openapi(postRoundNumberRoute, postRoundNumberRouteHandler)
  .openapi(postShortenLinkRoute, postShortenLinkRouteHandler)
  .openapi(postSortCollectionRoute, postSortCollectionRouteHandler)
  .openapi(postSpeechToTextRoute, postSpeechToTextRouteHandler)
  .openapi(postSplitCollectionRoute, postSplitCollectionRouteHandler)
  .openapi(postSplitStringRoute, postSplitStringRouteHandler)
  .openapi(postStandardDeviationRoute, postStandardDeviationRouteHandler)
  .openapi(postStockPricesRoute, postStockPricesRouteHandler)
  .openapi(postStringToFileRoute, postStringToFileRouteHandler)
  .openapi(postTextToSpeechRoute, postTextToSpeechRouteHandler)
  .openapi(postTranslateStringRoute, postTranslateStringRouteHandler)
  .openapi(postTrimStringRoute, postTrimStringRouteHandler)
  .openapi(postURLDecodeRoute, postURLDecodeRouteHandler)
  .openapi(postURLEncodeRoute, postURLEncodeRouteHandler)
  .openapi(postValidateEmailRoute, postValidateEmailRouteHandler)
  .openapi(postVerifyHashRoute, postVerifyHashRouteHandler)
  .openapi(postWatermarkImageRoute, postWatermarkImageRouteHandler)
  .openapi(postWorldTimeRoute, postWorldTimeRouteHandler)
  .openapi(postXMLtoJSONRoute, postXMLtoJSONRouteHandler)

export default app
