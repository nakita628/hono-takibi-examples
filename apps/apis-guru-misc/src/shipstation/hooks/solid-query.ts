import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQuestionsKey() {
  return ['questions'] as const
}

export function getQuestionsQueryKey() {
  return ['questions', '/questions'] as const
}

export function getQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuestionsQueryKey>
  >({
    queryKey: getQuestionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.questions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQuestionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuestionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostQuestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.questions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.questions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuestionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
