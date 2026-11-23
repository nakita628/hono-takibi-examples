import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAddToCollection(
  args: InferRequestType<typeof client.AddToCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AddToCollection.$post(args, options))
}

export async function postCSVtoJSON(
  args: InferRequestType<typeof client.CSVtoJSON.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CSVtoJSON.$post(args, options))
}

export async function postCalculateAbsolute(
  args: InferRequestType<typeof client.CalculateAbsolute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateAbsolute.$post(args, options))
}

export async function postCalculateAddition(
  args: InferRequestType<typeof client.CalculateAddition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateAddition.$post(args, options))
}

export async function postCalculateAverage(
  args: InferRequestType<typeof client.CalculateAverage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateAverage.$post(args, options))
}

export async function postCalculateCosine(
  args: InferRequestType<typeof client.CalculateCosine.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateCosine.$post(args, options))
}

export async function postCalculateDivision(
  args: InferRequestType<typeof client.CalculateDivision.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateDivision.$post(args, options))
}

export async function postCalculateLogarithm(
  args: InferRequestType<typeof client.CalculateLogarithm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateLogarithm.$post(args, options))
}

export async function postCalculateMedian(
  args: InferRequestType<typeof client.CalculateMedian.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateMedian.$post(args, options))
}

export async function postCalculateMinMax(
  args: InferRequestType<typeof client.CalculateMinMax.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateMinMax.$post(args, options))
}

export async function postCalculateModulo(
  args: InferRequestType<typeof client.CalculateModulo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateModulo.$post(args, options))
}

export async function postCalculateMultiplication(
  args: InferRequestType<typeof client.CalculateMultiplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateMultiplication.$post(args, options))
}

export async function postCalculateNthRoot(
  args: InferRequestType<typeof client.CalculateNthRoot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateNthRoot.$post(args, options))
}

export async function postCalculatePower(
  args: InferRequestType<typeof client.CalculatePower.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculatePower.$post(args, options))
}

export async function postCalculateSine(
  args: InferRequestType<typeof client.CalculateSine.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateSine.$post(args, options))
}

export async function postCalculateSquareRoot(
  args: InferRequestType<typeof client.CalculateSquareRoot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateSquareRoot.$post(args, options))
}

export async function postCalculateSubtraction(
  args: InferRequestType<typeof client.CalculateSubtraction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateSubtraction.$post(args, options))
}

export async function postCalculateSum(
  args: InferRequestType<typeof client.CalculateSum.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateSum.$post(args, options))
}

export async function postCalculateTangent(
  args: InferRequestType<typeof client.CalculateTangent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateTangent.$post(args, options))
}

export async function postCalculateVariance(
  args: InferRequestType<typeof client.CalculateVariance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CalculateVariance.$post(args, options))
}

export async function postCollectionContainsNumber(
  args: InferRequestType<typeof client.CollectionContainsNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionContainsNumber.$post(args, options))
}

export async function postCollectionContainsString(
  args: InferRequestType<typeof client.CollectionContainsString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionContainsString.$post(args, options))
}

export async function postCollectionEndsWithString(
  args: InferRequestType<typeof client.CollectionEndsWithString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionEndsWithString.$post(args, options))
}

export async function postCollectionStartsWithString(
  args: InferRequestType<typeof client.CollectionStartsWithString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionStartsWithString.$post(args, options))
}

export async function postCollectionToJSON(
  args: InferRequestType<typeof client.CollectionToJSON.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionToJSON.$post(args, options))
}

export async function postCollectionToXML(
  args: InferRequestType<typeof client.CollectionToXML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CollectionToXML.$post(args, options))
}

export async function postCompareStrings(
  args: InferRequestType<typeof client.CompareStrings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CompareStrings.$post(args, options))
}

export async function postContainsString(
  args: InferRequestType<typeof client.ContainsString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ContainsString.$post(args, options))
}

export async function postConvertAngle(
  args: InferRequestType<typeof client.ConvertAngle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertAngle.$post(args, options))
}

export async function postConvertArea(
  args: InferRequestType<typeof client.ConvertArea.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertArea.$post(args, options))
}

export async function postConvertCase(
  args: InferRequestType<typeof client.ConvertCase.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertCase.$post(args, options))
}

export async function postConvertCurrency(
  args: InferRequestType<typeof client.ConvertCurrency.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertCurrency.$post(args, options))
}

export async function postConvertDistance(
  args: InferRequestType<typeof client.ConvertDistance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertDistance.$post(args, options))
}

export async function postConvertDuration(
  args: InferRequestType<typeof client.ConvertDuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertDuration.$post(args, options))
}

export async function postConvertEnergy(
  args: InferRequestType<typeof client.ConvertEnergy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertEnergy.$post(args, options))
}

export async function postConvertImage(
  args: InferRequestType<typeof client.ConvertImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertImage.$post(args, options))
}

export async function postConvertPower(
  args: InferRequestType<typeof client.ConvertPower.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertPower.$post(args, options))
}

export async function postConvertSpeed(
  args: InferRequestType<typeof client.ConvertSpeed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertSpeed.$post(args, options))
}

export async function postConvertTemperature(
  args: InferRequestType<typeof client.ConvertTemperature.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertTemperature.$post(args, options))
}

export async function postConvertVolume(
  args: InferRequestType<typeof client.ConvertVolume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertVolume.$post(args, options))
}

export async function postConvertWeight(
  args: InferRequestType<typeof client.ConvertWeight.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ConvertWeight.$post(args, options))
}

export async function postCountCollection(
  args: InferRequestType<typeof client.CountCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CountCollection.$post(args, options))
}

export async function postCropImage(
  args: InferRequestType<typeof client.CropImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CropImage.$post(args, options))
}

export async function postDateTimeDifference(
  args: InferRequestType<typeof client.DateTimeDifference.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DateTimeDifference.$post(args, options))
}

export async function postDateTimeInfo(
  args: InferRequestType<typeof client.DateTimeInfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DateTimeInfo.$post(args, options))
}

export async function postDecodeString(
  args: InferRequestType<typeof client.DecodeString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DecodeString.$post(args, options))
}

export async function postEncodeString(
  args: InferRequestType<typeof client.EncodeString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.EncodeString.$post(args, options))
}

export async function postFileToString(
  args: InferRequestType<typeof client.FileToString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FileToString.$post(args, options))
}

export async function postFilterCollection(
  args: InferRequestType<typeof client.FilterCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FilterCollection.$post(args, options))
}

export async function postFlipImage(
  args: InferRequestType<typeof client.FlipImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FlipImage.$post(args, options))
}

export async function postFormatCurrency(
  args: InferRequestType<typeof client.FormatCurrency.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FormatCurrency.$post(args, options))
}

export async function postFormatDateTime(
  args: InferRequestType<typeof client.FormatDateTime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FormatDateTime.$post(args, options))
}

export async function postGenerateGuid(
  args: InferRequestType<typeof client.GenerateGuid.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GenerateGuid.$post(args, options))
}

export async function postGenerateHash(
  args: InferRequestType<typeof client.GenerateHash.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GenerateHash.$post(args, options))
}

export async function postGenerateQRCode(
  args: InferRequestType<typeof client.GenerateQRCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GenerateQRCode.$post(args, options))
}

export async function postJSONtoCSV(
  args: InferRequestType<typeof client.JSONtoCSV.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JSONtoCSV.$post(args, options))
}

export async function postJSONtoHTML(
  args: InferRequestType<typeof client.JSONtoHTML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JSONtoHTML.$post(args, options))
}

export async function postJSONtoXML(
  args: InferRequestType<typeof client.JSONtoXML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JSONtoXML.$post(args, options))
}

export async function postJoinStrings(
  args: InferRequestType<typeof client.JoinStrings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.JoinStrings.$post(args, options))
}

export async function postMarketIndex(
  args: InferRequestType<typeof client.MarketIndex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MarketIndex.$post(args, options))
}

export async function postQueryJSON(
  args: InferRequestType<typeof client.QueryJSON.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.QueryJSON.$post(args, options))
}

export async function postQueryXML(
  args: InferRequestType<typeof client.QueryXML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.QueryXML.$post(args, options))
}

export async function postRandomNumber(
  args: InferRequestType<typeof client.RandomNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RandomNumber.$post(args, options))
}

export async function postRedactString(
  args: InferRequestType<typeof client.RedactString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RedactString.$post(args, options))
}

export async function postRemoveFromCollection(
  args: InferRequestType<typeof client.RemoveFromCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RemoveFromCollection.$post(args, options))
}

export async function postReplaceString(
  args: InferRequestType<typeof client.ReplaceString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ReplaceString.$post(args, options))
}

export async function postReplaceValuesInCollection(
  args: InferRequestType<typeof client.ReplaceValuesInCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ReplaceValuesInCollection.$post(args, options))
}

export async function postResizeImage(
  args: InferRequestType<typeof client.ResizeImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ResizeImage.$post(args, options))
}

export async function postRotateImage(
  args: InferRequestType<typeof client.RotateImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RotateImage.$post(args, options))
}

export async function postRoundNumber(
  args: InferRequestType<typeof client.RoundNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RoundNumber.$post(args, options))
}

export async function postShortenLink(
  args: InferRequestType<typeof client.ShortenLink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ShortenLink.$post(args, options))
}

export async function postSortCollection(
  args: InferRequestType<typeof client.SortCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SortCollection.$post(args, options))
}

export async function postSpeechToText(
  args: InferRequestType<typeof client.SpeechToText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SpeechToText.$post(args, options))
}

export async function postSplitCollection(
  args: InferRequestType<typeof client.SplitCollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SplitCollection.$post(args, options))
}

export async function postSplitString(
  args: InferRequestType<typeof client.SplitString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SplitString.$post(args, options))
}

export async function postStandardDeviation(
  args: InferRequestType<typeof client.StandardDeviation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StandardDeviation.$post(args, options))
}

export async function postStockPrices(
  args: InferRequestType<typeof client.StockPrices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StockPrices.$post(args, options))
}

export async function postStringToFile(
  args: InferRequestType<typeof client.StringToFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StringToFile.$post(args, options))
}

export async function postTextToSpeech(
  args: InferRequestType<typeof client.TextToSpeech.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TextToSpeech.$post(args, options))
}

export async function postTranslateString(
  args: InferRequestType<typeof client.TranslateString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TranslateString.$post(args, options))
}

export async function postTrimString(
  args: InferRequestType<typeof client.TrimString.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TrimString.$post(args, options))
}

export async function postURLDecode(
  args: InferRequestType<typeof client.URLDecode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.URLDecode.$post(args, options))
}

export async function postURLEncode(
  args: InferRequestType<typeof client.URLEncode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.URLEncode.$post(args, options))
}

export async function postValidateEmail(
  args: InferRequestType<typeof client.ValidateEmail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ValidateEmail.$post(args, options))
}

export async function postVerifyHash(
  args: InferRequestType<typeof client.VerifyHash.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.VerifyHash.$post(args, options))
}

export async function postWatermarkImage(
  args: InferRequestType<typeof client.WatermarkImage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.WatermarkImage.$post(args, options))
}

export async function postWorldTime(
  args: InferRequestType<typeof client.WorldTime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.WorldTime.$post(args, options))
}

export async function postXMLtoJSON(
  args: InferRequestType<typeof client.XMLtoJSON.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.XMLtoJSON.$post(args, options))
}
