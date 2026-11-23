import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShakespeareKey() {
  return ['shakespeare'] as const
}

export function getShakespeareGenerateInsultQueryKey(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
) {
  return ['shakespeare', '/shakespeare/generate/insult', args] as const
}

export function getShakespeareGenerateInsultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shakespeare.generate.insult.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateInsultQueryKey>
  >({
    queryKey: getShakespeareGenerateInsultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shakespeare.generate.insult.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShakespeareGenerateInsult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shakespeare.generate.insult.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shakespeare.generate.insult.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShakespeareGenerateInsultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShakespeareGenerateInsultQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getShakespeareGenerateLoremIpsumQueryKey(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
) {
  return ['shakespeare', '/shakespeare/generate/lorem-ipsum', args] as const
}

export function getShakespeareGenerateLoremIpsumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateLoremIpsumQueryKey>
  >({
    queryKey: getShakespeareGenerateLoremIpsumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shakespeare.generate['lorem-ipsum'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShakespeareGenerateLoremIpsum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shakespeare.generate)['lorem-ipsum']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShakespeareGenerateLoremIpsumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShakespeareGenerateLoremIpsumQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getShakespeareGenerateNameQueryKey(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
) {
  return ['shakespeare', '/shakespeare/generate/name', args] as const
}

export function getShakespeareGenerateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shakespeare.generate.name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareGenerateNameQueryKey>
  >({
    queryKey: getShakespeareGenerateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shakespeare.generate.name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShakespeareGenerateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shakespeare.generate.name.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.generate.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShakespeareGenerateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShakespeareGenerateNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getShakespeareQuoteQueryKey() {
  return ['shakespeare', '/shakespeare/quote'] as const
}

export function getShakespeareQuoteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareQuoteQueryKey>
  >({
    queryKey: getShakespeareQuoteQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shakespeare.quote.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShakespeareQuote<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.quote.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShakespeareQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShakespeareQuoteQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getShakespeareTranslateQueryKey(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
) {
  return ['shakespeare', '/shakespeare/translate', args] as const
}

export function getShakespeareTranslateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shakespeare.translate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShakespeareTranslateQueryKey>
  >({
    queryKey: getShakespeareTranslateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shakespeare.translate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectShakespeareTranslate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shakespeare.translate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shakespeare.translate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShakespeareTranslateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShakespeareTranslateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
