import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getBlogKey() {
  return ['blog'] as const
}

export function getEsKey() {
  return ['es'] as const
}

export function getGlossaryKey() {
  return ['glossary'] as const
}

export function getQuestionKey() {
  return ['question'] as const
}

export function getPageNameMediaTypeExtensionKey() {
  return ['{pageName}{mediaTypeExtension}'] as const
}

export function getStateNameMediaTypeExtensionKey() {
  return ['{stateName}{mediaTypeExtension}'] as const
}

export function getApiArticlesMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>
  >,
) {
  return ['api', '/api/articles{mediaTypeExtension}', toValue(args)] as const
}

export function getApiArticlesMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArticlesMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['articles{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArticlesMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiArticlesMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArticlesMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArticlesMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['articles{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBlogMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>,
) {
  return ['api', '/api/blog{mediaTypeExtension}', toValue(args)] as const
}

export function getApiBlogMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBlogMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['blog{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBlogMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBlogMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBlogMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBlogMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['blog{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiGlossaryMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>
  >,
) {
  return ['api', '/api/glossary{mediaTypeExtension}', toValue(args)] as const
}

export function getApiGlossaryMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGlossaryMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['glossary{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGlossaryMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGlossaryMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlossaryMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGlossaryMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['glossary{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQuestionsMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>
  >,
) {
  return ['api', '/api/questions{mediaTypeExtension}', toValue(args)] as const
}

export function getApiQuestionsMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQuestionsMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['questions{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQuestionsMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiQuestionsMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiQuestionsMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQuestionsMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['questions{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiStatesMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>
  >,
) {
  return ['api', '/api/states{mediaTypeExtension}', toValue(args)] as const
}

export function getApiStatesMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiStatesMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['states{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiStatesMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiStatesMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiStatesMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiStatesMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['states{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTopicsMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>
  >,
) {
  return ['api', '/api/topics{mediaTypeExtension}', toValue(args)] as const
}

export function getApiTopicsMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTopicsMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['topics{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTopicsMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTopicsMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTopicsMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTopicsMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['topics{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBlogPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['blog', '/blog/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getBlogPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlogPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blog[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlogPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBlogPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlogPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlogPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blog[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEsBlogPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['es', '/es/blog/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getEsBlogPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEsBlogPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.es.blog[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEsBlogPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEsBlogPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEsBlogPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEsBlogPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.es.blog[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEsGlossaryPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['es', '/es/glossary/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getEsGlossaryPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEsGlossaryPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.es.glossary[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEsGlossaryPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEsGlossaryPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEsGlossaryPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEsGlossaryPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.es.glossary[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEsQuestionPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['es', '/es/question/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getEsQuestionPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEsQuestionPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.es.question[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEsQuestionPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEsQuestionPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEsQuestionPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEsQuestionPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.es.question[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEsPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['es', '/es/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getEsPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEsPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.es[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEsPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEsPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEsPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEsPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.es[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEsStateNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['es', '/es/:stateName{mediaTypeExtension}', toValue(args)] as const
}

export function getEsStateNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEsStateNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.es[':stateName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEsStateNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEsStateNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEsStateNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEsStateNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.es[':stateName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGlossaryPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['glossary', '/glossary/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getGlossaryPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGlossaryPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.glossary[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGlossaryPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGlossaryPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlossaryPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGlossaryPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.glossary[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuestionPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return ['question', '/question/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getQuestionPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuestionPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.question[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuestionPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getQuestionPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuestionPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuestionPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.question[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPageNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>
  >,
) {
  return [':pageName{mediaTypeExtension}', '/:pageName{mediaTypeExtension}', toValue(args)] as const
}

export function getPageNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPageNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':pageName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPageNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPageNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPageNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':pageName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStateNameMediaTypeExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>
  >,
) {
  return [
    ':stateName{mediaTypeExtension}',
    '/:stateName{mediaTypeExtension}',
    toValue(args),
  ] as const
}

export function getStateNameMediaTypeExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStateNameMediaTypeExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':stateName{mediaTypeExtension}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStateNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStateNameMediaTypeExtensionQueryKey>
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
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStateNameMediaTypeExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStateNameMediaTypeExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':stateName{mediaTypeExtension}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
