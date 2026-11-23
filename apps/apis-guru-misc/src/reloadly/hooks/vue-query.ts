import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQuestionsKey() {
  return ['questions'] as const
}

export function getQuestionsQueryKey() {
  return ['questions', '/questions'] as const
}

export function getQuestionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQuestionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.questions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          ReturnType<typeof getQuestionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQuestionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.questions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuestionsMutationKey() {
  return ['questions', '/questions', 'POST'] as const
}

export function getPostQuestionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$post>>>>>,
    TError,
    InferRequestType<typeof client.questions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuestionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.questions.$post>) {
      return parseResponse(client.questions.$post(args, options))
    },
  })
}

export function usePostQuestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.questions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuestionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
