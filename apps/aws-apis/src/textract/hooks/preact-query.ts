import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTextractAnalyzeDocumentKey() {
  return ['#X-Amz-Target=Textract.AnalyzeDocument'] as const
}

export function getXAmzTargetTextractAnalyzeExpenseKey() {
  return ['#X-Amz-Target=Textract.AnalyzeExpense'] as const
}

export function getXAmzTargetTextractAnalyzeIDKey() {
  return ['#X-Amz-Target=Textract.AnalyzeID'] as const
}

export function getXAmzTargetTextractDetectDocumentTextKey() {
  return ['#X-Amz-Target=Textract.DetectDocumentText'] as const
}

export function getXAmzTargetTextractGetDocumentAnalysisKey() {
  return ['#X-Amz-Target=Textract.GetDocumentAnalysis'] as const
}

export function getXAmzTargetTextractGetDocumentTextDetectionKey() {
  return ['#X-Amz-Target=Textract.GetDocumentTextDetection'] as const
}

export function getXAmzTargetTextractGetExpenseAnalysisKey() {
  return ['#X-Amz-Target=Textract.GetExpenseAnalysis'] as const
}

export function getXAmzTargetTextractGetLendingAnalysisKey() {
  return ['#X-Amz-Target=Textract.GetLendingAnalysis'] as const
}

export function getXAmzTargetTextractGetLendingAnalysisSummaryKey() {
  return ['#X-Amz-Target=Textract.GetLendingAnalysisSummary'] as const
}

export function getXAmzTargetTextractStartDocumentAnalysisKey() {
  return ['#X-Amz-Target=Textract.StartDocumentAnalysis'] as const
}

export function getXAmzTargetTextractStartDocumentTextDetectionKey() {
  return ['#X-Amz-Target=Textract.StartDocumentTextDetection'] as const
}

export function getXAmzTargetTextractStartExpenseAnalysisKey() {
  return ['#X-Amz-Target=Textract.StartExpenseAnalysis'] as const
}

export function getXAmzTargetTextractStartLendingAnalysisKey() {
  return ['#X-Amz-Target=Textract.StartLendingAnalysis'] as const
}

export function getPostXAmzTargetTextractAnalyzeDocumentMutationKey() {
  return [
    '#X-Amz-Target=Textract.AnalyzeDocument',
    '/#X-Amz-Target=Textract.AnalyzeDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractAnalyzeDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractAnalyzeDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.AnalyzeDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractAnalyzeDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractAnalyzeDocumentMutationOptions<
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

export function getPostXAmzTargetTextractAnalyzeExpenseMutationKey() {
  return [
    '#X-Amz-Target=Textract.AnalyzeExpense',
    '/#X-Amz-Target=Textract.AnalyzeExpense',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractAnalyzeExpenseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractAnalyzeExpenseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.AnalyzeExpense'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractAnalyzeExpense<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractAnalyzeExpenseMutationOptions<
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

export function getPostXAmzTargetTextractAnalyzeIDMutationKey() {
  return ['#X-Amz-Target=Textract.AnalyzeID', '/#X-Amz-Target=Textract.AnalyzeID', 'POST'] as const
}

export function getPostXAmzTargetTextractAnalyzeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractAnalyzeIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.AnalyzeID'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractAnalyzeID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractAnalyzeIDMutationOptions<
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

export function getPostXAmzTargetTextractDetectDocumentTextMutationKey() {
  return [
    '#X-Amz-Target=Textract.DetectDocumentText',
    '/#X-Amz-Target=Textract.DetectDocumentText',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractDetectDocumentTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractDetectDocumentTextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.DetectDocumentText'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractDetectDocumentText<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractDetectDocumentTextMutationOptions<
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

export function getPostXAmzTargetTextractGetDocumentAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.GetDocumentAnalysis',
    '/#X-Amz-Target=Textract.GetDocumentAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractGetDocumentAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractGetDocumentAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.GetDocumentAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractGetDocumentAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractGetDocumentAnalysisMutationOptions<
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

export function getPostXAmzTargetTextractGetDocumentTextDetectionMutationKey() {
  return [
    '#X-Amz-Target=Textract.GetDocumentTextDetection',
    '/#X-Amz-Target=Textract.GetDocumentTextDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractGetDocumentTextDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractGetDocumentTextDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.GetDocumentTextDetection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractGetDocumentTextDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractGetDocumentTextDetectionMutationOptions<
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

export function getPostXAmzTargetTextractGetExpenseAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.GetExpenseAnalysis',
    '/#X-Amz-Target=Textract.GetExpenseAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractGetExpenseAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractGetExpenseAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.GetExpenseAnalysis'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractGetExpenseAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractGetExpenseAnalysisMutationOptions<
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

export function getPostXAmzTargetTextractGetLendingAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.GetLendingAnalysis',
    '/#X-Amz-Target=Textract.GetLendingAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractGetLendingAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractGetLendingAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Textract.GetLendingAnalysis'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTextractGetLendingAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractGetLendingAnalysisMutationOptions<
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

export function getPostXAmzTargetTextractGetLendingAnalysisSummaryMutationKey() {
  return [
    '#X-Amz-Target=Textract.GetLendingAnalysisSummary',
    '/#X-Amz-Target=Textract.GetLendingAnalysisSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractGetLendingAnalysisSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractGetLendingAnalysisSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.GetLendingAnalysisSummary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractGetLendingAnalysisSummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractGetLendingAnalysisSummaryMutationOptions<
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

export function getPostXAmzTargetTextractStartDocumentAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.StartDocumentAnalysis',
    '/#X-Amz-Target=Textract.StartDocumentAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractStartDocumentAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractStartDocumentAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.StartDocumentAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractStartDocumentAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractStartDocumentAnalysisMutationOptions<
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

export function getPostXAmzTargetTextractStartDocumentTextDetectionMutationKey() {
  return [
    '#X-Amz-Target=Textract.StartDocumentTextDetection',
    '/#X-Amz-Target=Textract.StartDocumentTextDetection',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractStartDocumentTextDetectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractStartDocumentTextDetectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.StartDocumentTextDetection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractStartDocumentTextDetection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractStartDocumentTextDetectionMutationOptions<
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

export function getPostXAmzTargetTextractStartExpenseAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.StartExpenseAnalysis',
    '/#X-Amz-Target=Textract.StartExpenseAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractStartExpenseAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractStartExpenseAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.StartExpenseAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractStartExpenseAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractStartExpenseAnalysisMutationOptions<
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

export function getPostXAmzTargetTextractStartLendingAnalysisMutationKey() {
  return [
    '#X-Amz-Target=Textract.StartLendingAnalysis',
    '/#X-Amz-Target=Textract.StartLendingAnalysis',
    'POST',
  ] as const
}

export function getPostXAmzTargetTextractStartLendingAnalysisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTextractStartLendingAnalysisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Textract.StartLendingAnalysis'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTextractStartLendingAnalysis<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTextractStartLendingAnalysisMutationOptions<
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
