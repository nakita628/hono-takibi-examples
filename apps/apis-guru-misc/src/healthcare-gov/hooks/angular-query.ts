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
  args: InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/articles{mediaTypeExtension}', args] as const
}

export function getApiArticlesMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiArticlesMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['articles{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiArticlesMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['articles{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiArticlesMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiBlogMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/blog{mediaTypeExtension}', args] as const
}

export function getApiBlogMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiBlogMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['blog{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBlogMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['blog{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiBlogMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiGlossaryMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/glossary{mediaTypeExtension}', args] as const
}

export function getApiGlossaryMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGlossaryMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['glossary{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiGlossaryMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['glossary{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGlossaryMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiQuestionsMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/questions{mediaTypeExtension}', args] as const
}

export function getApiQuestionsMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiQuestionsMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['questions{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiQuestionsMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['questions{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiQuestionsMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiStatesMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/states{mediaTypeExtension}', args] as const
}

export function getApiStatesMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiStatesMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['states{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiStatesMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['states{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['states{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiStatesMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiTopicsMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>,
) {
  return ['api', '/api/topics{mediaTypeExtension}', args] as const
}

export function getApiTopicsMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTopicsMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['topics{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTopicsMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['topics{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiTopicsMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBlogPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['blog', '/blog/:pageName{mediaTypeExtension}', args] as const
}

export function getBlogPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBlogPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blog[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBlogPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getBlogPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEsBlogPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['es', '/es/blog/:pageName{mediaTypeExtension}', args] as const
}

export function getEsBlogPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEsBlogPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.es.blog[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEsBlogPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.es.blog)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEsBlogPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEsGlossaryPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['es', '/es/glossary/:pageName{mediaTypeExtension}', args] as const
}

export function getEsGlossaryPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEsGlossaryPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.es.glossary[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEsGlossaryPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.es.glossary)[':pageName{mediaTypeExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEsGlossaryPageNameMediaTypeExtensionQueryKey>
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
      ...getEsGlossaryPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEsQuestionPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['es', '/es/question/:pageName{mediaTypeExtension}', args] as const
}

export function getEsQuestionPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEsQuestionPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.es.question[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEsQuestionPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.es.question)[':pageName{mediaTypeExtension}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getEsQuestionPageNameMediaTypeExtensionQueryKey>
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
      ...getEsQuestionPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEsPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['es', '/es/:pageName{mediaTypeExtension}', args] as const
}

export function getEsPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEsPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.es[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEsPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.es)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEsPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEsStateNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>,
) {
  return ['es', '/es/:stateName{mediaTypeExtension}', args] as const
}

export function getEsStateNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEsStateNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.es[':stateName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEsStateNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.es)[':stateName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEsStateNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGlossaryPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['glossary', '/glossary/:pageName{mediaTypeExtension}', args] as const
}

export function getGlossaryPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGlossaryPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.glossary[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGlossaryPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.glossary)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGlossaryPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getQuestionPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return ['question', '/question/:pageName{mediaTypeExtension}', args] as const
}

export function getQuestionPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQuestionPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.question[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuestionPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.question)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getQuestionPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPageNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>,
) {
  return [':pageName{mediaTypeExtension}', '/:pageName{mediaTypeExtension}', args] as const
}

export function getPageNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPageNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':pageName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPageNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':pageName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPageNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getStateNameMediaTypeExtensionQueryKey(
  args: InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>,
) {
  return [':stateName{mediaTypeExtension}', '/:stateName{mediaTypeExtension}', args] as const
}

export function getStateNameMediaTypeExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStateNameMediaTypeExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':stateName{mediaTypeExtension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectStateNameMediaTypeExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':stateName{mediaTypeExtension}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getStateNameMediaTypeExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
