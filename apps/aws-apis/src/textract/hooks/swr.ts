import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetTextractAnalyzeDocumentKey() {
  return [
    '#X-Amz-Target=Textract.AnalyzeDocument',
    '/#X-Amz-Target=Textract.AnalyzeDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractAnalyzeDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractAnalyzeDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeDocument']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Textract.AnalyzeDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractAnalyzeExpenseKey() {
  return [
    '#X-Amz-Target=Textract.AnalyzeExpense',
    '/#X-Amz-Target=Textract.AnalyzeExpense',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractAnalyzeExpense<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractAnalyzeExpenseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeExpense']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=Textract.AnalyzeExpense'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractAnalyzeIDKey() {
  return ['#X-Amz-Target=Textract.AnalyzeID', '/#X-Amz-Target=Textract.AnalyzeID', 'POST'] as const
}

export function usePostXAmzTargetTextractAnalyzeID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractAnalyzeIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=Textract.AnalyzeID']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=Textract.AnalyzeID'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractDetectDocumentTextKey() {
  return [
    '#X-Amz-Target=Textract.DetectDocumentText',
    '/#X-Amz-Target=Textract.DetectDocumentText',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractDetectDocumentText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractDetectDocumentTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.DetectDocumentText']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.DetectDocumentText'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractGetDocumentAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.GetDocumentAnalysis',
    '/#X-Amz-Target=Textract.GetDocumentAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractGetDocumentAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractGetDocumentAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.GetDocumentAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.GetDocumentAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractGetDocumentTextDetectionKey() {
  return [
    '#X-Amz-Target=Textract.GetDocumentTextDetection',
    '/#X-Amz-Target=Textract.GetDocumentTextDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractGetDocumentTextDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractGetDocumentTextDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.GetDocumentTextDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.GetDocumentTextDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractGetExpenseAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.GetExpenseAnalysis',
    '/#X-Amz-Target=Textract.GetExpenseAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractGetExpenseAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractGetExpenseAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.GetExpenseAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.GetExpenseAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractGetLendingAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.GetLendingAnalysis',
    '/#X-Amz-Target=Textract.GetLendingAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractGetLendingAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractGetLendingAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.GetLendingAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractGetLendingAnalysisSummaryKey() {
  return [
    '#X-Amz-Target=Textract.GetLendingAnalysisSummary',
    '/#X-Amz-Target=Textract.GetLendingAnalysisSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractGetLendingAnalysisSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractGetLendingAnalysisSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.GetLendingAnalysisSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.GetLendingAnalysisSummary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractStartDocumentAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.StartDocumentAnalysis',
    '/#X-Amz-Target=Textract.StartDocumentAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractStartDocumentAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractStartDocumentAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.StartDocumentAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.StartDocumentAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractStartDocumentTextDetectionKey() {
  return [
    '#X-Amz-Target=Textract.StartDocumentTextDetection',
    '/#X-Amz-Target=Textract.StartDocumentTextDetection',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractStartDocumentTextDetection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractStartDocumentTextDetectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.StartDocumentTextDetection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.StartDocumentTextDetection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractStartExpenseAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.StartExpenseAnalysis',
    '/#X-Amz-Target=Textract.StartExpenseAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractStartExpenseAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractStartExpenseAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.StartExpenseAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.StartExpenseAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTextractStartLendingAnalysisKey() {
  return [
    '#X-Amz-Target=Textract.StartLendingAnalysis',
    '/#X-Amz-Target=Textract.StartLendingAnalysis',
    'POST',
  ] as const
}

export function usePostXAmzTargetTextractStartLendingAnalysis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTextractStartLendingAnalysisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Textract.StartLendingAnalysis']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Textract.StartLendingAnalysis'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
