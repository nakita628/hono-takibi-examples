import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostAddToCollectionMutationKey() {
  return ['AddToCollection', '/AddToCollection', 'POST'] as const
}

export function getPostAddToCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AddToCollection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.AddToCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddToCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AddToCollection.$post>) {
      return parseResponse(client.AddToCollection.$post(args, options))
    },
  })
}

export function usePostAddToCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AddToCollection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.AddToCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddToCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCSVtoJSONMutationKey() {
  return ['CSVtoJSON', '/CSVtoJSON', 'POST'] as const
}

export function getPostCSVtoJSONMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CSVtoJSON.$post>>>>>,
    TError,
    InferRequestType<typeof client.CSVtoJSON.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCSVtoJSONMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CSVtoJSON.$post>) {
      return parseResponse(client.CSVtoJSON.$post(args, options))
    },
  })
}

export function usePostCSVtoJSON<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CSVtoJSON.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CSVtoJSON.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCSVtoJSONMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateAbsoluteMutationKey() {
  return ['CalculateAbsolute', '/CalculateAbsolute', 'POST'] as const
}

export function getPostCalculateAbsoluteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAbsolute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateAbsolute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateAbsoluteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateAbsolute.$post>) {
      return parseResponse(client.CalculateAbsolute.$post(args, options))
    },
  })
}

export function usePostCalculateAbsolute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAbsolute.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateAbsolute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateAbsoluteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateAdditionMutationKey() {
  return ['CalculateAddition', '/CalculateAddition', 'POST'] as const
}

export function getPostCalculateAdditionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAddition.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateAddition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateAdditionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateAddition.$post>) {
      return parseResponse(client.CalculateAddition.$post(args, options))
    },
  })
}

export function usePostCalculateAddition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAddition.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateAddition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateAdditionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateAverageMutationKey() {
  return ['CalculateAverage', '/CalculateAverage', 'POST'] as const
}

export function getPostCalculateAverageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAverage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateAverage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateAverageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateAverage.$post>) {
      return parseResponse(client.CalculateAverage.$post(args, options))
    },
  })
}

export function usePostCalculateAverage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateAverage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateAverage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateAverageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateCosineMutationKey() {
  return ['CalculateCosine', '/CalculateCosine', 'POST'] as const
}

export function getPostCalculateCosineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateCosine.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateCosine.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateCosineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateCosine.$post>) {
      return parseResponse(client.CalculateCosine.$post(args, options))
    },
  })
}

export function usePostCalculateCosine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateCosine.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateCosine.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateCosineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateDivisionMutationKey() {
  return ['CalculateDivision', '/CalculateDivision', 'POST'] as const
}

export function getPostCalculateDivisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateDivision.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateDivision.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateDivisionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateDivision.$post>) {
      return parseResponse(client.CalculateDivision.$post(args, options))
    },
  })
}

export function usePostCalculateDivision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateDivision.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateDivision.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateDivisionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateLogarithmMutationKey() {
  return ['CalculateLogarithm', '/CalculateLogarithm', 'POST'] as const
}

export function getPostCalculateLogarithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateLogarithm.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateLogarithm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateLogarithmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateLogarithm.$post>) {
      return parseResponse(client.CalculateLogarithm.$post(args, options))
    },
  })
}

export function usePostCalculateLogarithm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateLogarithm.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateLogarithm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateLogarithmMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateMedianMutationKey() {
  return ['CalculateMedian', '/CalculateMedian', 'POST'] as const
}

export function getPostCalculateMedianMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMedian.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateMedian.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateMedianMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateMedian.$post>) {
      return parseResponse(client.CalculateMedian.$post(args, options))
    },
  })
}

export function usePostCalculateMedian<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMedian.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateMedian.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateMedianMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateMinMaxMutationKey() {
  return ['CalculateMinMax', '/CalculateMinMax', 'POST'] as const
}

export function getPostCalculateMinMaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMinMax.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateMinMax.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateMinMaxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateMinMax.$post>) {
      return parseResponse(client.CalculateMinMax.$post(args, options))
    },
  })
}

export function usePostCalculateMinMax<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMinMax.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateMinMax.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateMinMaxMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateModuloMutationKey() {
  return ['CalculateModulo', '/CalculateModulo', 'POST'] as const
}

export function getPostCalculateModuloMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateModulo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateModulo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateModuloMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateModulo.$post>) {
      return parseResponse(client.CalculateModulo.$post(args, options))
    },
  })
}

export function usePostCalculateModulo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateModulo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateModulo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateModuloMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateMultiplicationMutationKey() {
  return ['CalculateMultiplication', '/CalculateMultiplication', 'POST'] as const
}

export function getPostCalculateMultiplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMultiplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CalculateMultiplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateMultiplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateMultiplication.$post>) {
      return parseResponse(client.CalculateMultiplication.$post(args, options))
    },
  })
}

export function usePostCalculateMultiplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateMultiplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateMultiplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateMultiplicationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateNthRootMutationKey() {
  return ['CalculateNthRoot', '/CalculateNthRoot', 'POST'] as const
}

export function getPostCalculateNthRootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateNthRoot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateNthRoot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateNthRootMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateNthRoot.$post>) {
      return parseResponse(client.CalculateNthRoot.$post(args, options))
    },
  })
}

export function usePostCalculateNthRoot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateNthRoot.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateNthRoot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateNthRootMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculatePowerMutationKey() {
  return ['CalculatePower', '/CalculatePower', 'POST'] as const
}

export function getPostCalculatePowerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculatePower.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculatePower.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculatePowerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculatePower.$post>) {
      return parseResponse(client.CalculatePower.$post(args, options))
    },
  })
}

export function usePostCalculatePower<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculatePower.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculatePower.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculatePowerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateSineMutationKey() {
  return ['CalculateSine', '/CalculateSine', 'POST'] as const
}

export function getPostCalculateSineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSine.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateSine.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateSineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateSine.$post>) {
      return parseResponse(client.CalculateSine.$post(args, options))
    },
  })
}

export function usePostCalculateSine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSine.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateSine.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateSineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateSquareRootMutationKey() {
  return ['CalculateSquareRoot', '/CalculateSquareRoot', 'POST'] as const
}

export function getPostCalculateSquareRootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSquareRoot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateSquareRoot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateSquareRootMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateSquareRoot.$post>) {
      return parseResponse(client.CalculateSquareRoot.$post(args, options))
    },
  })
}

export function usePostCalculateSquareRoot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSquareRoot.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateSquareRoot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateSquareRootMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateSubtractionMutationKey() {
  return ['CalculateSubtraction', '/CalculateSubtraction', 'POST'] as const
}

export function getPostCalculateSubtractionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSubtraction.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CalculateSubtraction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateSubtractionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateSubtraction.$post>) {
      return parseResponse(client.CalculateSubtraction.$post(args, options))
    },
  })
}

export function usePostCalculateSubtraction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSubtraction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateSubtraction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateSubtractionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateSumMutationKey() {
  return ['CalculateSum', '/CalculateSum', 'POST'] as const
}

export function getPostCalculateSumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSum.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateSum.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateSumMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateSum.$post>) {
      return parseResponse(client.CalculateSum.$post(args, options))
    },
  })
}

export function usePostCalculateSum<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateSum.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CalculateSum.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateSumMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateTangentMutationKey() {
  return ['CalculateTangent', '/CalculateTangent', 'POST'] as const
}

export function getPostCalculateTangentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateTangent.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateTangent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateTangentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateTangent.$post>) {
      return parseResponse(client.CalculateTangent.$post(args, options))
    },
  })
}

export function usePostCalculateTangent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateTangent.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateTangent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateTangentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCalculateVarianceMutationKey() {
  return ['CalculateVariance', '/CalculateVariance', 'POST'] as const
}

export function getPostCalculateVarianceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CalculateVariance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CalculateVariance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateVarianceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CalculateVariance.$post>) {
      return parseResponse(client.CalculateVariance.$post(args, options))
    },
  })
}

export function usePostCalculateVariance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CalculateVariance.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CalculateVariance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCalculateVarianceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionContainsNumberMutationKey() {
  return ['CollectionContainsNumber', '/CollectionContainsNumber', 'POST'] as const
}

export function getPostCollectionContainsNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsNumber.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CollectionContainsNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionContainsNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionContainsNumber.$post>) {
      return parseResponse(client.CollectionContainsNumber.$post(args, options))
    },
  })
}

export function usePostCollectionContainsNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsNumber.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CollectionContainsNumber.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionContainsNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionContainsStringMutationKey() {
  return ['CollectionContainsString', '/CollectionContainsString', 'POST'] as const
}

export function getPostCollectionContainsStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsString.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CollectionContainsString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionContainsStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionContainsString.$post>) {
      return parseResponse(client.CollectionContainsString.$post(args, options))
    },
  })
}

export function usePostCollectionContainsString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CollectionContainsString.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CollectionContainsString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionContainsStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionEndsWithStringMutationKey() {
  return ['CollectionEndsWithString', '/CollectionEndsWithString', 'POST'] as const
}

export function getPostCollectionEndsWithStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionEndsWithString.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CollectionEndsWithString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionEndsWithStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionEndsWithString.$post>) {
      return parseResponse(client.CollectionEndsWithString.$post(args, options))
    },
  })
}

export function usePostCollectionEndsWithString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CollectionEndsWithString.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CollectionEndsWithString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionEndsWithStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionStartsWithStringMutationKey() {
  return ['CollectionStartsWithString', '/CollectionStartsWithString', 'POST'] as const
}

export function getPostCollectionStartsWithStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CollectionStartsWithString.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CollectionStartsWithString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionStartsWithStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionStartsWithString.$post>) {
      return parseResponse(client.CollectionStartsWithString.$post(args, options))
    },
  })
}

export function usePostCollectionStartsWithString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CollectionStartsWithString.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CollectionStartsWithString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionStartsWithStringMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionToJSONMutationKey() {
  return ['CollectionToJSON', '/CollectionToJSON', 'POST'] as const
}

export function getPostCollectionToJSONMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToJSON.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CollectionToJSON.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionToJSONMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionToJSON.$post>) {
      return parseResponse(client.CollectionToJSON.$post(args, options))
    },
  })
}

export function usePostCollectionToJSON<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToJSON.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CollectionToJSON.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionToJSONMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionToXMLMutationKey() {
  return ['CollectionToXML', '/CollectionToXML', 'POST'] as const
}

export function getPostCollectionToXMLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToXML.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CollectionToXML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionToXMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CollectionToXML.$post>) {
      return parseResponse(client.CollectionToXML.$post(args, options))
    },
  })
}

export function usePostCollectionToXML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CollectionToXML.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CollectionToXML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionToXMLMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCompareStringsMutationKey() {
  return ['CompareStrings', '/CompareStrings', 'POST'] as const
}

export function getPostCompareStringsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CompareStrings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CompareStrings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompareStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CompareStrings.$post>) {
      return parseResponse(client.CompareStrings.$post(args, options))
    },
  })
}

export function usePostCompareStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CompareStrings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CompareStrings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompareStringsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostContainsStringMutationKey() {
  return ['ContainsString', '/ContainsString', 'POST'] as const
}

export function getPostContainsStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContainsString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ContainsString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContainsStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ContainsString.$post>) {
      return parseResponse(client.ContainsString.$post(args, options))
    },
  })
}

export function usePostContainsString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ContainsString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ContainsString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContainsStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertAngleMutationKey() {
  return ['ConvertAngle', '/ConvertAngle', 'POST'] as const
}

export function getPostConvertAngleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertAngle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertAngle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertAngleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertAngle.$post>) {
      return parseResponse(client.ConvertAngle.$post(args, options))
    },
  })
}

export function usePostConvertAngle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertAngle.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertAngle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertAngleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertAreaMutationKey() {
  return ['ConvertArea', '/ConvertArea', 'POST'] as const
}

export function getPostConvertAreaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertArea.$post>>>>>,
    TError,
    InferRequestType<typeof client.ConvertArea.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertAreaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertArea.$post>) {
      return parseResponse(client.ConvertArea.$post(args, options))
    },
  })
}

export function usePostConvertArea<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertArea.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertArea.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertAreaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertCaseMutationKey() {
  return ['ConvertCase', '/ConvertCase', 'POST'] as const
}

export function getPostConvertCaseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCase.$post>>>>>,
    TError,
    InferRequestType<typeof client.ConvertCase.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertCaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertCase.$post>) {
      return parseResponse(client.ConvertCase.$post(args, options))
    },
  })
}

export function usePostConvertCase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCase.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertCase.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertCaseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertCurrencyMutationKey() {
  return ['ConvertCurrency', '/ConvertCurrency', 'POST'] as const
}

export function getPostConvertCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCurrency.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertCurrency.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertCurrencyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertCurrency.$post>) {
      return parseResponse(client.ConvertCurrency.$post(args, options))
    },
  })
}

export function usePostConvertCurrency<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertCurrency.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertCurrency.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertCurrencyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertDistanceMutationKey() {
  return ['ConvertDistance', '/ConvertDistance', 'POST'] as const
}

export function getPostConvertDistanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDistance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertDistance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertDistanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertDistance.$post>) {
      return parseResponse(client.ConvertDistance.$post(args, options))
    },
  })
}

export function usePostConvertDistance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDistance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertDistance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertDistanceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertDurationMutationKey() {
  return ['ConvertDuration', '/ConvertDuration', 'POST'] as const
}

export function getPostConvertDurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDuration.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertDuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertDurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertDuration.$post>) {
      return parseResponse(client.ConvertDuration.$post(args, options))
    },
  })
}

export function usePostConvertDuration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertDuration.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertDuration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertDurationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertEnergyMutationKey() {
  return ['ConvertEnergy', '/ConvertEnergy', 'POST'] as const
}

export function getPostConvertEnergyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertEnergy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertEnergy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertEnergyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertEnergy.$post>) {
      return parseResponse(client.ConvertEnergy.$post(args, options))
    },
  })
}

export function usePostConvertEnergy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertEnergy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertEnergy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertEnergyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertImageMutationKey() {
  return ['ConvertImage', '/ConvertImage', 'POST'] as const
}

export function getPostConvertImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertImage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertImage.$post>) {
      return parseResponse(client.ConvertImage.$post(args, options))
    },
  })
}

export function usePostConvertImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertImageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertPowerMutationKey() {
  return ['ConvertPower', '/ConvertPower', 'POST'] as const
}

export function getPostConvertPowerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertPower.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertPower.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertPowerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertPower.$post>) {
      return parseResponse(client.ConvertPower.$post(args, options))
    },
  })
}

export function usePostConvertPower<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertPower.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertPower.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertPowerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertSpeedMutationKey() {
  return ['ConvertSpeed', '/ConvertSpeed', 'POST'] as const
}

export function getPostConvertSpeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertSpeed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertSpeed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertSpeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertSpeed.$post>) {
      return parseResponse(client.ConvertSpeed.$post(args, options))
    },
  })
}

export function usePostConvertSpeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertSpeed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertSpeed.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertSpeedMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertTemperatureMutationKey() {
  return ['ConvertTemperature', '/ConvertTemperature', 'POST'] as const
}

export function getPostConvertTemperatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertTemperature.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertTemperature.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertTemperatureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertTemperature.$post>) {
      return parseResponse(client.ConvertTemperature.$post(args, options))
    },
  })
}

export function usePostConvertTemperature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ConvertTemperature.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ConvertTemperature.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertTemperatureMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertVolumeMutationKey() {
  return ['ConvertVolume', '/ConvertVolume', 'POST'] as const
}

export function getPostConvertVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertVolume.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertVolume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertVolumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertVolume.$post>) {
      return parseResponse(client.ConvertVolume.$post(args, options))
    },
  })
}

export function usePostConvertVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertVolume.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertVolume.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertVolumeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConvertWeightMutationKey() {
  return ['ConvertWeight', '/ConvertWeight', 'POST'] as const
}

export function getPostConvertWeightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertWeight.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ConvertWeight.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertWeightMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ConvertWeight.$post>) {
      return parseResponse(client.ConvertWeight.$post(args, options))
    },
  })
}

export function usePostConvertWeight<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ConvertWeight.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ConvertWeight.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertWeightMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCountCollectionMutationKey() {
  return ['CountCollection', '/CountCollection', 'POST'] as const
}

export function getPostCountCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CountCollection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CountCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCountCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CountCollection.$post>) {
      return parseResponse(client.CountCollection.$post(args, options))
    },
  })
}

export function usePostCountCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CountCollection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CountCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCountCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCropImageMutationKey() {
  return ['CropImage', '/CropImage', 'POST'] as const
}

export function getPostCropImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CropImage.$post>>>>>,
    TError,
    InferRequestType<typeof client.CropImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCropImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CropImage.$post>) {
      return parseResponse(client.CropImage.$post(args, options))
    },
  })
}

export function usePostCropImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CropImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CropImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCropImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDateTimeDifferenceMutationKey() {
  return ['DateTimeDifference', '/DateTimeDifference', 'POST'] as const
}

export function getPostDateTimeDifferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeDifference.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DateTimeDifference.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDateTimeDifferenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DateTimeDifference.$post>) {
      return parseResponse(client.DateTimeDifference.$post(args, options))
    },
  })
}

export function usePostDateTimeDifference<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeDifference.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DateTimeDifference.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDateTimeDifferenceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDateTimeInfoMutationKey() {
  return ['DateTimeInfo', '/DateTimeInfo', 'POST'] as const
}

export function getPostDateTimeInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeInfo.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DateTimeInfo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDateTimeInfoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DateTimeInfo.$post>) {
      return parseResponse(client.DateTimeInfo.$post(args, options))
    },
  })
}

export function usePostDateTimeInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DateTimeInfo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DateTimeInfo.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDateTimeInfoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDecodeStringMutationKey() {
  return ['DecodeString', '/DecodeString', 'POST'] as const
}

export function getPostDecodeStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DecodeString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DecodeString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDecodeStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DecodeString.$post>) {
      return parseResponse(client.DecodeString.$post(args, options))
    },
  })
}

export function usePostDecodeString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DecodeString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DecodeString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDecodeStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEncodeStringMutationKey() {
  return ['EncodeString', '/EncodeString', 'POST'] as const
}

export function getPostEncodeStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EncodeString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.EncodeString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEncodeStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.EncodeString.$post>) {
      return parseResponse(client.EncodeString.$post(args, options))
    },
  })
}

export function usePostEncodeString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.EncodeString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.EncodeString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEncodeStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFileToStringMutationKey() {
  return ['FileToString', '/FileToString', 'POST'] as const
}

export function getPostFileToStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FileToString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FileToString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileToStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FileToString.$post>) {
      return parseResponse(client.FileToString.$post(args, options))
    },
  })
}

export function usePostFileToString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FileToString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FileToString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFileToStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFilterCollectionMutationKey() {
  return ['FilterCollection', '/FilterCollection', 'POST'] as const
}

export function getPostFilterCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FilterCollection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FilterCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilterCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FilterCollection.$post>) {
      return parseResponse(client.FilterCollection.$post(args, options))
    },
  })
}

export function usePostFilterCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.FilterCollection.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.FilterCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilterCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFlipImageMutationKey() {
  return ['FlipImage', '/FlipImage', 'POST'] as const
}

export function getPostFlipImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FlipImage.$post>>>>>,
    TError,
    InferRequestType<typeof client.FlipImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFlipImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FlipImage.$post>) {
      return parseResponse(client.FlipImage.$post(args, options))
    },
  })
}

export function usePostFlipImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FlipImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FlipImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFlipImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFormatCurrencyMutationKey() {
  return ['FormatCurrency', '/FormatCurrency', 'POST'] as const
}

export function getPostFormatCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatCurrency.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FormatCurrency.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatCurrencyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FormatCurrency.$post>) {
      return parseResponse(client.FormatCurrency.$post(args, options))
    },
  })
}

export function usePostFormatCurrency<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatCurrency.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FormatCurrency.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFormatCurrencyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFormatDateTimeMutationKey() {
  return ['FormatDateTime', '/FormatDateTime', 'POST'] as const
}

export function getPostFormatDateTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatDateTime.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FormatDateTime.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatDateTimeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FormatDateTime.$post>) {
      return parseResponse(client.FormatDateTime.$post(args, options))
    },
  })
}

export function usePostFormatDateTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FormatDateTime.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FormatDateTime.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFormatDateTimeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGenerateGuidMutationKey() {
  return ['GenerateGuid', '/GenerateGuid', 'POST'] as const
}

export function getPostGenerateGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateGuid.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GenerateGuid.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateGuidMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GenerateGuid.$post>) {
      return parseResponse(client.GenerateGuid.$post(args, options))
    },
  })
}

export function usePostGenerateGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateGuid.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GenerateGuid.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenerateGuidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGenerateHashMutationKey() {
  return ['GenerateHash', '/GenerateHash', 'POST'] as const
}

export function getPostGenerateHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateHash.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GenerateHash.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateHashMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GenerateHash.$post>) {
      return parseResponse(client.GenerateHash.$post(args, options))
    },
  })
}

export function usePostGenerateHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateHash.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GenerateHash.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenerateHashMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGenerateQRCodeMutationKey() {
  return ['GenerateQRCode', '/GenerateQRCode', 'POST'] as const
}

export function getPostGenerateQRCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateQRCode.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GenerateQRCode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateQRCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GenerateQRCode.$post>) {
      return parseResponse(client.GenerateQRCode.$post(args, options))
    },
  })
}

export function usePostGenerateQRCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GenerateQRCode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GenerateQRCode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenerateQRCodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJSONtoCSVMutationKey() {
  return ['JSONtoCSV', '/JSONtoCSV', 'POST'] as const
}

export function getPostJSONtoCSVMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoCSV.$post>>>>>,
    TError,
    InferRequestType<typeof client.JSONtoCSV.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJSONtoCSVMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.JSONtoCSV.$post>) {
      return parseResponse(client.JSONtoCSV.$post(args, options))
    },
  })
}

export function usePostJSONtoCSV<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoCSV.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.JSONtoCSV.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJSONtoCSVMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJSONtoHTMLMutationKey() {
  return ['JSONtoHTML', '/JSONtoHTML', 'POST'] as const
}

export function getPostJSONtoHTMLMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoHTML.$post>>>>>,
    TError,
    InferRequestType<typeof client.JSONtoHTML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJSONtoHTMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.JSONtoHTML.$post>) {
      return parseResponse(client.JSONtoHTML.$post(args, options))
    },
  })
}

export function usePostJSONtoHTML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoHTML.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.JSONtoHTML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJSONtoHTMLMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJSONtoXMLMutationKey() {
  return ['JSONtoXML', '/JSONtoXML', 'POST'] as const
}

export function getPostJSONtoXMLMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoXML.$post>>>>>,
    TError,
    InferRequestType<typeof client.JSONtoXML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJSONtoXMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.JSONtoXML.$post>) {
      return parseResponse(client.JSONtoXML.$post(args, options))
    },
  })
}

export function usePostJSONtoXML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JSONtoXML.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.JSONtoXML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJSONtoXMLMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJoinStringsMutationKey() {
  return ['JoinStrings', '/JoinStrings', 'POST'] as const
}

export function getPostJoinStringsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JoinStrings.$post>>>>>,
    TError,
    InferRequestType<typeof client.JoinStrings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJoinStringsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.JoinStrings.$post>) {
      return parseResponse(client.JoinStrings.$post(args, options))
    },
  })
}

export function usePostJoinStrings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JoinStrings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.JoinStrings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostJoinStringsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMarketIndexMutationKey() {
  return ['MarketIndex', '/MarketIndex', 'POST'] as const
}

export function getPostMarketIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarketIndex.$post>>>>>,
    TError,
    InferRequestType<typeof client.MarketIndex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.MarketIndex.$post>) {
      return parseResponse(client.MarketIndex.$post(args, options))
    },
  })
}

export function usePostMarketIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarketIndex.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.MarketIndex.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMarketIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQueryJSONMutationKey() {
  return ['QueryJSON', '/QueryJSON', 'POST'] as const
}

export function getPostQueryJSONMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryJSON.$post>>>>>,
    TError,
    InferRequestType<typeof client.QueryJSON.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryJSONMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.QueryJSON.$post>) {
      return parseResponse(client.QueryJSON.$post(args, options))
    },
  })
}

export function usePostQueryJSON<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryJSON.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.QueryJSON.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueryJSONMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQueryXMLMutationKey() {
  return ['QueryXML', '/QueryXML', 'POST'] as const
}

export function getPostQueryXMLMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryXML.$post>>>>>,
    TError,
    InferRequestType<typeof client.QueryXML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryXMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.QueryXML.$post>) {
      return parseResponse(client.QueryXML.$post(args, options))
    },
  })
}

export function usePostQueryXML<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QueryXML.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.QueryXML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueryXMLMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRandomNumberMutationKey() {
  return ['RandomNumber', '/RandomNumber', 'POST'] as const
}

export function getPostRandomNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RandomNumber.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RandomNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRandomNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RandomNumber.$post>) {
      return parseResponse(client.RandomNumber.$post(args, options))
    },
  })
}

export function usePostRandomNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RandomNumber.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.RandomNumber.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRandomNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRedactStringMutationKey() {
  return ['RedactString', '/RedactString', 'POST'] as const
}

export function getPostRedactStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RedactString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RedactString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRedactStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RedactString.$post>) {
      return parseResponse(client.RedactString.$post(args, options))
    },
  })
}

export function usePostRedactString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RedactString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.RedactString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRedactStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRemoveFromCollectionMutationKey() {
  return ['RemoveFromCollection', '/RemoveFromCollection', 'POST'] as const
}

export function getPostRemoveFromCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RemoveFromCollection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.RemoveFromCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoveFromCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RemoveFromCollection.$post>) {
      return parseResponse(client.RemoveFromCollection.$post(args, options))
    },
  })
}

export function usePostRemoveFromCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RemoveFromCollection.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RemoveFromCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRemoveFromCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReplaceStringMutationKey() {
  return ['ReplaceString', '/ReplaceString', 'POST'] as const
}

export function getPostReplaceStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ReplaceString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReplaceStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ReplaceString.$post>) {
      return parseResponse(client.ReplaceString.$post(args, options))
    },
  })
}

export function usePostReplaceString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ReplaceString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReplaceStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReplaceValuesInCollectionMutationKey() {
  return ['ReplaceValuesInCollection', '/ReplaceValuesInCollection', 'POST'] as const
}

export function getPostReplaceValuesInCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceValuesInCollection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ReplaceValuesInCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReplaceValuesInCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ReplaceValuesInCollection.$post>) {
      return parseResponse(client.ReplaceValuesInCollection.$post(args, options))
    },
  })
}

export function usePostReplaceValuesInCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ReplaceValuesInCollection.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ReplaceValuesInCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReplaceValuesInCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostResizeImageMutationKey() {
  return ['ResizeImage', '/ResizeImage', 'POST'] as const
}

export function getPostResizeImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ResizeImage.$post>>>>>,
    TError,
    InferRequestType<typeof client.ResizeImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResizeImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ResizeImage.$post>) {
      return parseResponse(client.ResizeImage.$post(args, options))
    },
  })
}

export function usePostResizeImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ResizeImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ResizeImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResizeImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRotateImageMutationKey() {
  return ['RotateImage', '/RotateImage', 'POST'] as const
}

export function getPostRotateImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RotateImage.$post>>>>>,
    TError,
    InferRequestType<typeof client.RotateImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRotateImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RotateImage.$post>) {
      return parseResponse(client.RotateImage.$post(args, options))
    },
  })
}

export function usePostRotateImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RotateImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.RotateImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRotateImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRoundNumberMutationKey() {
  return ['RoundNumber', '/RoundNumber', 'POST'] as const
}

export function getPostRoundNumberMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RoundNumber.$post>>>>>,
    TError,
    InferRequestType<typeof client.RoundNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoundNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RoundNumber.$post>) {
      return parseResponse(client.RoundNumber.$post(args, options))
    },
  })
}

export function usePostRoundNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RoundNumber.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.RoundNumber.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoundNumberMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostShortenLinkMutationKey() {
  return ['ShortenLink', '/ShortenLink', 'POST'] as const
}

export function getPostShortenLinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ShortenLink.$post>>>>>,
    TError,
    InferRequestType<typeof client.ShortenLink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShortenLinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ShortenLink.$post>) {
      return parseResponse(client.ShortenLink.$post(args, options))
    },
  })
}

export function usePostShortenLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ShortenLink.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ShortenLink.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShortenLinkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSortCollectionMutationKey() {
  return ['SortCollection', '/SortCollection', 'POST'] as const
}

export function getPostSortCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SortCollection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.SortCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSortCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SortCollection.$post>) {
      return parseResponse(client.SortCollection.$post(args, options))
    },
  })
}

export function usePostSortCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SortCollection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.SortCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSortCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSpeechToTextMutationKey() {
  return ['SpeechToText', '/SpeechToText', 'POST'] as const
}

export function getPostSpeechToTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SpeechToText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.SpeechToText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpeechToTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SpeechToText.$post>) {
      return parseResponse(client.SpeechToText.$post(args, options))
    },
  })
}

export function usePostSpeechToText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SpeechToText.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.SpeechToText.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpeechToTextMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSplitCollectionMutationKey() {
  return ['SplitCollection', '/SplitCollection', 'POST'] as const
}

export function getPostSplitCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitCollection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.SplitCollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSplitCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SplitCollection.$post>) {
      return parseResponse(client.SplitCollection.$post(args, options))
    },
  })
}

export function usePostSplitCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitCollection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.SplitCollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSplitCollectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSplitStringMutationKey() {
  return ['SplitString', '/SplitString', 'POST'] as const
}

export function getPostSplitStringMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitString.$post>>>>>,
    TError,
    InferRequestType<typeof client.SplitString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSplitStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SplitString.$post>) {
      return parseResponse(client.SplitString.$post(args, options))
    },
  })
}

export function usePostSplitString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SplitString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.SplitString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSplitStringMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStandardDeviationMutationKey() {
  return ['StandardDeviation', '/StandardDeviation', 'POST'] as const
}

export function getPostStandardDeviationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StandardDeviation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StandardDeviation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStandardDeviationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StandardDeviation.$post>) {
      return parseResponse(client.StandardDeviation.$post(args, options))
    },
  })
}

export function usePostStandardDeviation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StandardDeviation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.StandardDeviation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStandardDeviationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStockPricesMutationKey() {
  return ['StockPrices', '/StockPrices', 'POST'] as const
}

export function getPostStockPricesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StockPrices.$post>>>>>,
    TError,
    InferRequestType<typeof client.StockPrices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStockPricesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StockPrices.$post>) {
      return parseResponse(client.StockPrices.$post(args, options))
    },
  })
}

export function usePostStockPrices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StockPrices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StockPrices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStockPricesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStringToFileMutationKey() {
  return ['StringToFile', '/StringToFile', 'POST'] as const
}

export function getPostStringToFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StringToFile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StringToFile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStringToFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StringToFile.$post>) {
      return parseResponse(client.StringToFile.$post(args, options))
    },
  })
}

export function usePostStringToFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StringToFile.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StringToFile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStringToFileMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTextToSpeechMutationKey() {
  return ['TextToSpeech', '/TextToSpeech', 'POST'] as const
}

export function getPostTextToSpeechMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TextToSpeech.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.TextToSpeech.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTextToSpeechMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TextToSpeech.$post>) {
      return parseResponse(client.TextToSpeech.$post(args, options))
    },
  })
}

export function usePostTextToSpeech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TextToSpeech.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.TextToSpeech.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTextToSpeechMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTranslateStringMutationKey() {
  return ['TranslateString', '/TranslateString', 'POST'] as const
}

export function getPostTranslateStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TranslateString.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.TranslateString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTranslateStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TranslateString.$post>) {
      return parseResponse(client.TranslateString.$post(args, options))
    },
  })
}

export function usePostTranslateString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TranslateString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.TranslateString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTranslateStringMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTrimStringMutationKey() {
  return ['TrimString', '/TrimString', 'POST'] as const
}

export function getPostTrimStringMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrimString.$post>>>>>,
    TError,
    InferRequestType<typeof client.TrimString.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrimStringMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TrimString.$post>) {
      return parseResponse(client.TrimString.$post(args, options))
    },
  })
}

export function usePostTrimString<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.TrimString.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.TrimString.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTrimStringMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostURLDecodeMutationKey() {
  return ['URLDecode', '/URLDecode', 'POST'] as const
}

export function getPostURLDecodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLDecode.$post>>>>>,
    TError,
    InferRequestType<typeof client.URLDecode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostURLDecodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.URLDecode.$post>) {
      return parseResponse(client.URLDecode.$post(args, options))
    },
  })
}

export function usePostURLDecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLDecode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.URLDecode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostURLDecodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostURLEncodeMutationKey() {
  return ['URLEncode', '/URLEncode', 'POST'] as const
}

export function getPostURLEncodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLEncode.$post>>>>>,
    TError,
    InferRequestType<typeof client.URLEncode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostURLEncodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.URLEncode.$post>) {
      return parseResponse(client.URLEncode.$post(args, options))
    },
  })
}

export function usePostURLEncode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.URLEncode.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.URLEncode.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostURLEncodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostValidateEmailMutationKey() {
  return ['ValidateEmail', '/ValidateEmail', 'POST'] as const
}

export function getPostValidateEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ValidateEmail.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ValidateEmail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ValidateEmail.$post>) {
      return parseResponse(client.ValidateEmail.$post(args, options))
    },
  })
}

export function usePostValidateEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ValidateEmail.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ValidateEmail.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostValidateEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVerifyHashMutationKey() {
  return ['VerifyHash', '/VerifyHash', 'POST'] as const
}

export function getPostVerifyHashMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.VerifyHash.$post>>>>>,
    TError,
    InferRequestType<typeof client.VerifyHash.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyHashMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.VerifyHash.$post>) {
      return parseResponse(client.VerifyHash.$post(args, options))
    },
  })
}

export function usePostVerifyHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.VerifyHash.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.VerifyHash.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVerifyHashMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWatermarkImageMutationKey() {
  return ['WatermarkImage', '/WatermarkImage', 'POST'] as const
}

export function getPostWatermarkImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WatermarkImage.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.WatermarkImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWatermarkImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.WatermarkImage.$post>) {
      return parseResponse(client.WatermarkImage.$post(args, options))
    },
  })
}

export function usePostWatermarkImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WatermarkImage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.WatermarkImage.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWatermarkImageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWorldTimeMutationKey() {
  return ['WorldTime', '/WorldTime', 'POST'] as const
}

export function getPostWorldTimeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WorldTime.$post>>>>>,
    TError,
    InferRequestType<typeof client.WorldTime.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorldTimeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.WorldTime.$post>) {
      return parseResponse(client.WorldTime.$post(args, options))
    },
  })
}

export function usePostWorldTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.WorldTime.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.WorldTime.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorldTimeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXMLtoJSONMutationKey() {
  return ['XMLtoJSON', '/XMLtoJSON', 'POST'] as const
}

export function getPostXMLtoJSONMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.XMLtoJSON.$post>>>>>,
    TError,
    InferRequestType<typeof client.XMLtoJSON.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostXMLtoJSONMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.XMLtoJSON.$post>) {
      return parseResponse(client.XMLtoJSON.$post(args, options))
    },
  })
}

export function usePostXMLtoJSON<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.XMLtoJSON.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.XMLtoJSON.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXMLtoJSONMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
