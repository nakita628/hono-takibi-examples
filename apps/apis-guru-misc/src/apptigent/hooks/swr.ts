import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddToCollectionKey() {
  return ['AddToCollection'] as const
}

export function getCSVtoJSONKey() {
  return ['CSVtoJSON'] as const
}

export function getCalculateAbsoluteKey() {
  return ['CalculateAbsolute'] as const
}

export function getCalculateAdditionKey() {
  return ['CalculateAddition'] as const
}

export function getCalculateAverageKey() {
  return ['CalculateAverage'] as const
}

export function getCalculateCosineKey() {
  return ['CalculateCosine'] as const
}

export function getCalculateDivisionKey() {
  return ['CalculateDivision'] as const
}

export function getCalculateLogarithmKey() {
  return ['CalculateLogarithm'] as const
}

export function getCalculateMedianKey() {
  return ['CalculateMedian'] as const
}

export function getCalculateMinMaxKey() {
  return ['CalculateMinMax'] as const
}

export function getCalculateModuloKey() {
  return ['CalculateModulo'] as const
}

export function getCalculateMultiplicationKey() {
  return ['CalculateMultiplication'] as const
}

export function getCalculateNthRootKey() {
  return ['CalculateNthRoot'] as const
}

export function getCalculatePowerKey() {
  return ['CalculatePower'] as const
}

export function getCalculateSineKey() {
  return ['CalculateSine'] as const
}

export function getCalculateSquareRootKey() {
  return ['CalculateSquareRoot'] as const
}

export function getCalculateSubtractionKey() {
  return ['CalculateSubtraction'] as const
}

export function getCalculateSumKey() {
  return ['CalculateSum'] as const
}

export function getCalculateTangentKey() {
  return ['CalculateTangent'] as const
}

export function getCalculateVarianceKey() {
  return ['CalculateVariance'] as const
}

export function getCollectionContainsNumberKey() {
  return ['CollectionContainsNumber'] as const
}

export function getCollectionContainsStringKey() {
  return ['CollectionContainsString'] as const
}

export function getCollectionEndsWithStringKey() {
  return ['CollectionEndsWithString'] as const
}

export function getCollectionStartsWithStringKey() {
  return ['CollectionStartsWithString'] as const
}

export function getCollectionToJSONKey() {
  return ['CollectionToJSON'] as const
}

export function getCollectionToXMLKey() {
  return ['CollectionToXML'] as const
}

export function getCompareStringsKey() {
  return ['CompareStrings'] as const
}

export function getContainsStringKey() {
  return ['ContainsString'] as const
}

export function getConvertAngleKey() {
  return ['ConvertAngle'] as const
}

export function getConvertAreaKey() {
  return ['ConvertArea'] as const
}

export function getConvertCaseKey() {
  return ['ConvertCase'] as const
}

export function getConvertCurrencyKey() {
  return ['ConvertCurrency'] as const
}

export function getConvertDistanceKey() {
  return ['ConvertDistance'] as const
}

export function getConvertDurationKey() {
  return ['ConvertDuration'] as const
}

export function getConvertEnergyKey() {
  return ['ConvertEnergy'] as const
}

export function getConvertImageKey() {
  return ['ConvertImage'] as const
}

export function getConvertPowerKey() {
  return ['ConvertPower'] as const
}

export function getConvertSpeedKey() {
  return ['ConvertSpeed'] as const
}

export function getConvertTemperatureKey() {
  return ['ConvertTemperature'] as const
}

export function getConvertVolumeKey() {
  return ['ConvertVolume'] as const
}

export function getConvertWeightKey() {
  return ['ConvertWeight'] as const
}

export function getCountCollectionKey() {
  return ['CountCollection'] as const
}

export function getCropImageKey() {
  return ['CropImage'] as const
}

export function getDateTimeDifferenceKey() {
  return ['DateTimeDifference'] as const
}

export function getDateTimeInfoKey() {
  return ['DateTimeInfo'] as const
}

export function getDecodeStringKey() {
  return ['DecodeString'] as const
}

export function getEncodeStringKey() {
  return ['EncodeString'] as const
}

export function getFileToStringKey() {
  return ['FileToString'] as const
}

export function getFilterCollectionKey() {
  return ['FilterCollection'] as const
}

export function getFlipImageKey() {
  return ['FlipImage'] as const
}

export function getFormatCurrencyKey() {
  return ['FormatCurrency'] as const
}

export function getFormatDateTimeKey() {
  return ['FormatDateTime'] as const
}

export function getGenerateGuidKey() {
  return ['GenerateGuid'] as const
}

export function getGenerateHashKey() {
  return ['GenerateHash'] as const
}

export function getGenerateQRCodeKey() {
  return ['GenerateQRCode'] as const
}

export function getJSONtoCSVKey() {
  return ['JSONtoCSV'] as const
}

export function getJSONtoHTMLKey() {
  return ['JSONtoHTML'] as const
}

export function getJSONtoXMLKey() {
  return ['JSONtoXML'] as const
}

export function getJoinStringsKey() {
  return ['JoinStrings'] as const
}

export function getMarketIndexKey() {
  return ['MarketIndex'] as const
}

export function getQueryJSONKey() {
  return ['QueryJSON'] as const
}

export function getQueryXMLKey() {
  return ['QueryXML'] as const
}

export function getRandomNumberKey() {
  return ['RandomNumber'] as const
}

export function getRedactStringKey() {
  return ['RedactString'] as const
}

export function getRemoveFromCollectionKey() {
  return ['RemoveFromCollection'] as const
}

export function getReplaceStringKey() {
  return ['ReplaceString'] as const
}

export function getReplaceValuesInCollectionKey() {
  return ['ReplaceValuesInCollection'] as const
}

export function getResizeImageKey() {
  return ['ResizeImage'] as const
}

export function getRotateImageKey() {
  return ['RotateImage'] as const
}

export function getRoundNumberKey() {
  return ['RoundNumber'] as const
}

export function getShortenLinkKey() {
  return ['ShortenLink'] as const
}

export function getSortCollectionKey() {
  return ['SortCollection'] as const
}

export function getSpeechToTextKey() {
  return ['SpeechToText'] as const
}

export function getSplitCollectionKey() {
  return ['SplitCollection'] as const
}

export function getSplitStringKey() {
  return ['SplitString'] as const
}

export function getStandardDeviationKey() {
  return ['StandardDeviation'] as const
}

export function getStockPricesKey() {
  return ['StockPrices'] as const
}

export function getStringToFileKey() {
  return ['StringToFile'] as const
}

export function getTextToSpeechKey() {
  return ['TextToSpeech'] as const
}

export function getTranslateStringKey() {
  return ['TranslateString'] as const
}

export function getTrimStringKey() {
  return ['TrimString'] as const
}

export function getURLDecodeKey() {
  return ['URLDecode'] as const
}

export function getURLEncodeKey() {
  return ['URLEncode'] as const
}

export function getValidateEmailKey() {
  return ['ValidateEmail'] as const
}

export function getVerifyHashKey() {
  return ['VerifyHash'] as const
}

export function getWatermarkImageKey() {
  return ['WatermarkImage'] as const
}

export function getWorldTimeKey() {
  return ['WorldTime'] as const
}

export function getXMLtoJSONKey() {
  return ['XMLtoJSON'] as const
}

export function getPostAddToCollectionKey() {
  return ['AddToCollection', '/AddToCollection', 'POST'] as const
}

export function usePostAddToCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AddToCollection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.AddToCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddToCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.AddToCollection.$post> }) =>
        parseResponse(client.AddToCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCSVtoJSONKey() {
  return ['CSVtoJSON', '/CSVtoJSON', 'POST'] as const
}

export function usePostCSVtoJSON<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CSVtoJSON.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CSVtoJSON.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCSVtoJSONKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CSVtoJSON.$post> }) =>
        parseResponse(client.CSVtoJSON.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateAbsoluteKey() {
  return ['CalculateAbsolute', '/CalculateAbsolute', 'POST'] as const
}

export function usePostCalculateAbsolute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAbsolute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateAbsolute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateAbsoluteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateAbsolute.$post> }) =>
        parseResponse(client.CalculateAbsolute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateAdditionKey() {
  return ['CalculateAddition', '/CalculateAddition', 'POST'] as const
}

export function usePostCalculateAddition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAddition.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateAddition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateAdditionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateAddition.$post> }) =>
        parseResponse(client.CalculateAddition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateAverageKey() {
  return ['CalculateAverage', '/CalculateAverage', 'POST'] as const
}

export function usePostCalculateAverage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAverage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateAverage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateAverageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateAverage.$post> }) =>
        parseResponse(client.CalculateAverage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateCosineKey() {
  return ['CalculateCosine', '/CalculateCosine', 'POST'] as const
}

export function usePostCalculateCosine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateCosine.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateCosine.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateCosineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateCosine.$post> }) =>
        parseResponse(client.CalculateCosine.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateDivisionKey() {
  return ['CalculateDivision', '/CalculateDivision', 'POST'] as const
}

export function usePostCalculateDivision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateDivision.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateDivision.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateDivisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateDivision.$post> }) =>
        parseResponse(client.CalculateDivision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateLogarithmKey() {
  return ['CalculateLogarithm', '/CalculateLogarithm', 'POST'] as const
}

export function usePostCalculateLogarithm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateLogarithm.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateLogarithm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateLogarithmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateLogarithm.$post> }) =>
        parseResponse(client.CalculateLogarithm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateMedianKey() {
  return ['CalculateMedian', '/CalculateMedian', 'POST'] as const
}

export function usePostCalculateMedian<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMedian.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateMedian.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateMedianKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateMedian.$post> }) =>
        parseResponse(client.CalculateMedian.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateMinMaxKey() {
  return ['CalculateMinMax', '/CalculateMinMax', 'POST'] as const
}

export function usePostCalculateMinMax<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMinMax.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateMinMax.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateMinMaxKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateMinMax.$post> }) =>
        parseResponse(client.CalculateMinMax.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateModuloKey() {
  return ['CalculateModulo', '/CalculateModulo', 'POST'] as const
}

export function usePostCalculateModulo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateModulo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateModulo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateModuloKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateModulo.$post> }) =>
        parseResponse(client.CalculateModulo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateMultiplicationKey() {
  return ['CalculateMultiplication', '/CalculateMultiplication', 'POST'] as const
}

export function usePostCalculateMultiplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMultiplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateMultiplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateMultiplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CalculateMultiplication.$post> },
      ) => parseResponse(client.CalculateMultiplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateNthRootKey() {
  return ['CalculateNthRoot', '/CalculateNthRoot', 'POST'] as const
}

export function usePostCalculateNthRoot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateNthRoot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateNthRoot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateNthRootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateNthRoot.$post> }) =>
        parseResponse(client.CalculateNthRoot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculatePowerKey() {
  return ['CalculatePower', '/CalculatePower', 'POST'] as const
}

export function usePostCalculatePower<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculatePower.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculatePower.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculatePowerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculatePower.$post> }) =>
        parseResponse(client.CalculatePower.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateSineKey() {
  return ['CalculateSine', '/CalculateSine', 'POST'] as const
}

export function usePostCalculateSine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSine.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateSine.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateSineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateSine.$post> }) =>
        parseResponse(client.CalculateSine.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateSquareRootKey() {
  return ['CalculateSquareRoot', '/CalculateSquareRoot', 'POST'] as const
}

export function usePostCalculateSquareRoot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSquareRoot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateSquareRoot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateSquareRootKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateSquareRoot.$post> }) =>
        parseResponse(client.CalculateSquareRoot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateSubtractionKey() {
  return ['CalculateSubtraction', '/CalculateSubtraction', 'POST'] as const
}

export function usePostCalculateSubtraction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSubtraction.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateSubtraction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateSubtractionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CalculateSubtraction.$post> },
      ) => parseResponse(client.CalculateSubtraction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateSumKey() {
  return ['CalculateSum', '/CalculateSum', 'POST'] as const
}

export function usePostCalculateSum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSum.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateSum.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateSumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateSum.$post> }) =>
        parseResponse(client.CalculateSum.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateTangentKey() {
  return ['CalculateTangent', '/CalculateTangent', 'POST'] as const
}

export function usePostCalculateTangent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateTangent.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateTangent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateTangentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateTangent.$post> }) =>
        parseResponse(client.CalculateTangent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalculateVarianceKey() {
  return ['CalculateVariance', '/CalculateVariance', 'POST'] as const
}

export function usePostCalculateVariance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateVariance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CalculateVariance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalculateVarianceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CalculateVariance.$post> }) =>
        parseResponse(client.CalculateVariance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionContainsNumberKey() {
  return ['CollectionContainsNumber', '/CollectionContainsNumber', 'POST'] as const
}

export function usePostCollectionContainsNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsNumber.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionContainsNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionContainsNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CollectionContainsNumber.$post> },
      ) => parseResponse(client.CollectionContainsNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionContainsStringKey() {
  return ['CollectionContainsString', '/CollectionContainsString', 'POST'] as const
}

export function usePostCollectionContainsString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsString.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionContainsString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionContainsStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CollectionContainsString.$post> },
      ) => parseResponse(client.CollectionContainsString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionEndsWithStringKey() {
  return ['CollectionEndsWithString', '/CollectionEndsWithString', 'POST'] as const
}

export function usePostCollectionEndsWithString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionEndsWithString.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionEndsWithString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionEndsWithStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CollectionEndsWithString.$post> },
      ) => parseResponse(client.CollectionEndsWithString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionStartsWithStringKey() {
  return ['CollectionStartsWithString', '/CollectionStartsWithString', 'POST'] as const
}

export function usePostCollectionStartsWithString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionStartsWithString.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionStartsWithString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionStartsWithStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CollectionStartsWithString.$post> },
      ) => parseResponse(client.CollectionStartsWithString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionToJSONKey() {
  return ['CollectionToJSON', '/CollectionToJSON', 'POST'] as const
}

export function usePostCollectionToJSON<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToJSON.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionToJSON.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionToJSONKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CollectionToJSON.$post> }) =>
        parseResponse(client.CollectionToJSON.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionToXMLKey() {
  return ['CollectionToXML', '/CollectionToXML', 'POST'] as const
}

export function usePostCollectionToXML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToXML.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CollectionToXML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionToXMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CollectionToXML.$post> }) =>
        parseResponse(client.CollectionToXML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCompareStringsKey() {
  return ['CompareStrings', '/CompareStrings', 'POST'] as const
}

export function usePostCompareStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CompareStrings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CompareStrings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompareStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CompareStrings.$post> }) =>
        parseResponse(client.CompareStrings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContainsStringKey() {
  return ['ContainsString', '/ContainsString', 'POST'] as const
}

export function usePostContainsString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContainsString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ContainsString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContainsStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ContainsString.$post> }) =>
        parseResponse(client.ContainsString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertAngleKey() {
  return ['ConvertAngle', '/ConvertAngle', 'POST'] as const
}

export function usePostConvertAngle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertAngle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertAngle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertAngleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertAngle.$post> }) =>
        parseResponse(client.ConvertAngle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertAreaKey() {
  return ['ConvertArea', '/ConvertArea', 'POST'] as const
}

export function usePostConvertArea<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertArea.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ConvertArea.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertAreaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertArea.$post> }) =>
        parseResponse(client.ConvertArea.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertCaseKey() {
  return ['ConvertCase', '/ConvertCase', 'POST'] as const
}

export function usePostConvertCase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCase.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ConvertCase.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertCaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertCase.$post> }) =>
        parseResponse(client.ConvertCase.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertCurrencyKey() {
  return ['ConvertCurrency', '/ConvertCurrency', 'POST'] as const
}

export function usePostConvertCurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCurrency.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertCurrency.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertCurrencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertCurrency.$post> }) =>
        parseResponse(client.ConvertCurrency.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertDistanceKey() {
  return ['ConvertDistance', '/ConvertDistance', 'POST'] as const
}

export function usePostConvertDistance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDistance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertDistance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertDistanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertDistance.$post> }) =>
        parseResponse(client.ConvertDistance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertDurationKey() {
  return ['ConvertDuration', '/ConvertDuration', 'POST'] as const
}

export function usePostConvertDuration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDuration.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertDuration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertDurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertDuration.$post> }) =>
        parseResponse(client.ConvertDuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertEnergyKey() {
  return ['ConvertEnergy', '/ConvertEnergy', 'POST'] as const
}

export function usePostConvertEnergy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertEnergy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertEnergy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertEnergyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertEnergy.$post> }) =>
        parseResponse(client.ConvertEnergy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertImageKey() {
  return ['ConvertImage', '/ConvertImage', 'POST'] as const
}

export function usePostConvertImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertImage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertImage.$post> }) =>
        parseResponse(client.ConvertImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertPowerKey() {
  return ['ConvertPower', '/ConvertPower', 'POST'] as const
}

export function usePostConvertPower<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertPower.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertPower.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertPowerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertPower.$post> }) =>
        parseResponse(client.ConvertPower.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertSpeedKey() {
  return ['ConvertSpeed', '/ConvertSpeed', 'POST'] as const
}

export function usePostConvertSpeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertSpeed.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertSpeed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertSpeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertSpeed.$post> }) =>
        parseResponse(client.ConvertSpeed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertTemperatureKey() {
  return ['ConvertTemperature', '/ConvertTemperature', 'POST'] as const
}

export function usePostConvertTemperature<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertTemperature.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertTemperature.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertTemperatureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertTemperature.$post> }) =>
        parseResponse(client.ConvertTemperature.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertVolumeKey() {
  return ['ConvertVolume', '/ConvertVolume', 'POST'] as const
}

export function usePostConvertVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertVolume.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertVolume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertVolume.$post> }) =>
        parseResponse(client.ConvertVolume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConvertWeightKey() {
  return ['ConvertWeight', '/ConvertWeight', 'POST'] as const
}

export function usePostConvertWeight<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertWeight.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ConvertWeight.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertWeightKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ConvertWeight.$post> }) =>
        parseResponse(client.ConvertWeight.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCountCollectionKey() {
  return ['CountCollection', '/CountCollection', 'POST'] as const
}

export function usePostCountCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CountCollection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CountCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCountCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CountCollection.$post> }) =>
        parseResponse(client.CountCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCropImageKey() {
  return ['CropImage', '/CropImage', 'POST'] as const
}

export function usePostCropImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CropImage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CropImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCropImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CropImage.$post> }) =>
        parseResponse(client.CropImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDateTimeDifferenceKey() {
  return ['DateTimeDifference', '/DateTimeDifference', 'POST'] as const
}

export function usePostDateTimeDifference<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeDifference.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DateTimeDifference.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDateTimeDifferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DateTimeDifference.$post> }) =>
        parseResponse(client.DateTimeDifference.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDateTimeInfoKey() {
  return ['DateTimeInfo', '/DateTimeInfo', 'POST'] as const
}

export function usePostDateTimeInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeInfo.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DateTimeInfo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDateTimeInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DateTimeInfo.$post> }) =>
        parseResponse(client.DateTimeInfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDecodeStringKey() {
  return ['DecodeString', '/DecodeString', 'POST'] as const
}

export function usePostDecodeString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DecodeString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DecodeString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDecodeStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DecodeString.$post> }) =>
        parseResponse(client.DecodeString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEncodeStringKey() {
  return ['EncodeString', '/EncodeString', 'POST'] as const
}

export function usePostEncodeString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EncodeString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.EncodeString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEncodeStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.EncodeString.$post> }) =>
        parseResponse(client.EncodeString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileToStringKey() {
  return ['FileToString', '/FileToString', 'POST'] as const
}

export function usePostFileToString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FileToString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FileToString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileToStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FileToString.$post> }) =>
        parseResponse(client.FileToString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilterCollectionKey() {
  return ['FilterCollection', '/FilterCollection', 'POST'] as const
}

export function usePostFilterCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FilterCollection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FilterCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilterCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FilterCollection.$post> }) =>
        parseResponse(client.FilterCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFlipImageKey() {
  return ['FlipImage', '/FlipImage', 'POST'] as const
}

export function usePostFlipImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FlipImage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.FlipImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFlipImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FlipImage.$post> }) =>
        parseResponse(client.FlipImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFormatCurrencyKey() {
  return ['FormatCurrency', '/FormatCurrency', 'POST'] as const
}

export function usePostFormatCurrency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatCurrency.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FormatCurrency.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormatCurrencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FormatCurrency.$post> }) =>
        parseResponse(client.FormatCurrency.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFormatDateTimeKey() {
  return ['FormatDateTime', '/FormatDateTime', 'POST'] as const
}

export function usePostFormatDateTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatDateTime.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FormatDateTime.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormatDateTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FormatDateTime.$post> }) =>
        parseResponse(client.FormatDateTime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateGuidKey() {
  return ['GenerateGuid', '/GenerateGuid', 'POST'] as const
}

export function usePostGenerateGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateGuid.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GenerateGuid.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateGuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GenerateGuid.$post> }) =>
        parseResponse(client.GenerateGuid.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateHashKey() {
  return ['GenerateHash', '/GenerateHash', 'POST'] as const
}

export function usePostGenerateHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateHash.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GenerateHash.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GenerateHash.$post> }) =>
        parseResponse(client.GenerateHash.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGenerateQRCodeKey() {
  return ['GenerateQRCode', '/GenerateQRCode', 'POST'] as const
}

export function usePostGenerateQRCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateQRCode.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GenerateQRCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenerateQRCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GenerateQRCode.$post> }) =>
        parseResponse(client.GenerateQRCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJSONtoCSVKey() {
  return ['JSONtoCSV', '/JSONtoCSV', 'POST'] as const
}

export function usePostJSONtoCSV<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoCSV.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.JSONtoCSV.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJSONtoCSVKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.JSONtoCSV.$post> }) =>
        parseResponse(client.JSONtoCSV.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJSONtoHTMLKey() {
  return ['JSONtoHTML', '/JSONtoHTML', 'POST'] as const
}

export function usePostJSONtoHTML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoHTML.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.JSONtoHTML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJSONtoHTMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.JSONtoHTML.$post> }) =>
        parseResponse(client.JSONtoHTML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJSONtoXMLKey() {
  return ['JSONtoXML', '/JSONtoXML', 'POST'] as const
}

export function usePostJSONtoXML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoXML.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.JSONtoXML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJSONtoXMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.JSONtoXML.$post> }) =>
        parseResponse(client.JSONtoXML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostJoinStringsKey() {
  return ['JoinStrings', '/JoinStrings', 'POST'] as const
}

export function usePostJoinStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JoinStrings.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.JoinStrings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJoinStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.JoinStrings.$post> }) =>
        parseResponse(client.JoinStrings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketIndexKey() {
  return ['MarketIndex', '/MarketIndex', 'POST'] as const
}

export function usePostMarketIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarketIndex.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.MarketIndex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.MarketIndex.$post> }) =>
        parseResponse(client.MarketIndex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryJSONKey() {
  return ['QueryJSON', '/QueryJSON', 'POST'] as const
}

export function usePostQueryJSON<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryJSON.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.QueryJSON.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryJSONKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.QueryJSON.$post> }) =>
        parseResponse(client.QueryJSON.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryXMLKey() {
  return ['QueryXML', '/QueryXML', 'POST'] as const
}

export function usePostQueryXML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryXML.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.QueryXML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryXMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.QueryXML.$post> }) =>
        parseResponse(client.QueryXML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRandomNumberKey() {
  return ['RandomNumber', '/RandomNumber', 'POST'] as const
}

export function usePostRandomNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RandomNumber.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RandomNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRandomNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RandomNumber.$post> }) =>
        parseResponse(client.RandomNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRedactStringKey() {
  return ['RedactString', '/RedactString', 'POST'] as const
}

export function usePostRedactString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RedactString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RedactString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedactStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RedactString.$post> }) =>
        parseResponse(client.RedactString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemoveFromCollectionKey() {
  return ['RemoveFromCollection', '/RemoveFromCollection', 'POST'] as const
}

export function usePostRemoveFromCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RemoveFromCollection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.RemoveFromCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoveFromCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.RemoveFromCollection.$post> },
      ) => parseResponse(client.RemoveFromCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReplaceStringKey() {
  return ['ReplaceString', '/ReplaceString', 'POST'] as const
}

export function usePostReplaceString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ReplaceString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplaceStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ReplaceString.$post> }) =>
        parseResponse(client.ReplaceString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReplaceValuesInCollectionKey() {
  return ['ReplaceValuesInCollection', '/ReplaceValuesInCollection', 'POST'] as const
}

export function usePostReplaceValuesInCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceValuesInCollection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ReplaceValuesInCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplaceValuesInCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ReplaceValuesInCollection.$post> },
      ) => parseResponse(client.ReplaceValuesInCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResizeImageKey() {
  return ['ResizeImage', '/ResizeImage', 'POST'] as const
}

export function usePostResizeImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ResizeImage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ResizeImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResizeImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ResizeImage.$post> }) =>
        parseResponse(client.ResizeImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRotateImageKey() {
  return ['RotateImage', '/RotateImage', 'POST'] as const
}

export function usePostRotateImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RotateImage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.RotateImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRotateImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RotateImage.$post> }) =>
        parseResponse(client.RotateImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoundNumberKey() {
  return ['RoundNumber', '/RoundNumber', 'POST'] as const
}

export function usePostRoundNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RoundNumber.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.RoundNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoundNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RoundNumber.$post> }) =>
        parseResponse(client.RoundNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShortenLinkKey() {
  return ['ShortenLink', '/ShortenLink', 'POST'] as const
}

export function usePostShortenLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ShortenLink.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ShortenLink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShortenLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ShortenLink.$post> }) =>
        parseResponse(client.ShortenLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSortCollectionKey() {
  return ['SortCollection', '/SortCollection', 'POST'] as const
}

export function usePostSortCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SortCollection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.SortCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSortCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SortCollection.$post> }) =>
        parseResponse(client.SortCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpeechToTextKey() {
  return ['SpeechToText', '/SpeechToText', 'POST'] as const
}

export function usePostSpeechToText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SpeechToText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.SpeechToText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpeechToTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SpeechToText.$post> }) =>
        parseResponse(client.SpeechToText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSplitCollectionKey() {
  return ['SplitCollection', '/SplitCollection', 'POST'] as const
}

export function usePostSplitCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitCollection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.SplitCollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSplitCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SplitCollection.$post> }) =>
        parseResponse(client.SplitCollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSplitStringKey() {
  return ['SplitString', '/SplitString', 'POST'] as const
}

export function usePostSplitString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitString.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.SplitString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSplitStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SplitString.$post> }) =>
        parseResponse(client.SplitString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStandardDeviationKey() {
  return ['StandardDeviation', '/StandardDeviation', 'POST'] as const
}

export function usePostStandardDeviation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StandardDeviation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StandardDeviation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStandardDeviationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StandardDeviation.$post> }) =>
        parseResponse(client.StandardDeviation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStockPricesKey() {
  return ['StockPrices', '/StockPrices', 'POST'] as const
}

export function usePostStockPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StockPrices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.StockPrices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStockPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StockPrices.$post> }) =>
        parseResponse(client.StockPrices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStringToFileKey() {
  return ['StringToFile', '/StringToFile', 'POST'] as const
}

export function usePostStringToFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StringToFile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StringToFile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStringToFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StringToFile.$post> }) =>
        parseResponse(client.StringToFile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTextToSpeechKey() {
  return ['TextToSpeech', '/TextToSpeech', 'POST'] as const
}

export function usePostTextToSpeech<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TextToSpeech.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TextToSpeech.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTextToSpeechKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TextToSpeech.$post> }) =>
        parseResponse(client.TextToSpeech.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTranslateStringKey() {
  return ['TranslateString', '/TranslateString', 'POST'] as const
}

export function usePostTranslateString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TranslateString.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.TranslateString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTranslateStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TranslateString.$post> }) =>
        parseResponse(client.TranslateString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTrimStringKey() {
  return ['TrimString', '/TrimString', 'POST'] as const
}

export function usePostTrimString<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrimString.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.TrimString.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrimStringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.TrimString.$post> }) =>
        parseResponse(client.TrimString.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostURLDecodeKey() {
  return ['URLDecode', '/URLDecode', 'POST'] as const
}

export function usePostURLDecode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLDecode.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.URLDecode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostURLDecodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.URLDecode.$post> }) =>
        parseResponse(client.URLDecode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostURLEncodeKey() {
  return ['URLEncode', '/URLEncode', 'POST'] as const
}

export function usePostURLEncode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLEncode.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.URLEncode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostURLEncodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.URLEncode.$post> }) =>
        parseResponse(client.URLEncode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostValidateEmailKey() {
  return ['ValidateEmail', '/ValidateEmail', 'POST'] as const
}

export function usePostValidateEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ValidateEmail.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ValidateEmail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ValidateEmail.$post> }) =>
        parseResponse(client.ValidateEmail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVerifyHashKey() {
  return ['VerifyHash', '/VerifyHash', 'POST'] as const
}

export function usePostVerifyHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.VerifyHash.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.VerifyHash.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifyHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.VerifyHash.$post> }) =>
        parseResponse(client.VerifyHash.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWatermarkImageKey() {
  return ['WatermarkImage', '/WatermarkImage', 'POST'] as const
}

export function usePostWatermarkImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WatermarkImage.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.WatermarkImage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWatermarkImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.WatermarkImage.$post> }) =>
        parseResponse(client.WatermarkImage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWorldTimeKey() {
  return ['WorldTime', '/WorldTime', 'POST'] as const
}

export function usePostWorldTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WorldTime.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.WorldTime.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorldTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.WorldTime.$post> }) =>
        parseResponse(client.WorldTime.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXMLtoJSONKey() {
  return ['XMLtoJSON', '/XMLtoJSON', 'POST'] as const
}

export function usePostXMLtoJSON<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.XMLtoJSON.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.XMLtoJSON.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXMLtoJSONKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.XMLtoJSON.$post> }) =>
        parseResponse(client.XMLtoJSON.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
