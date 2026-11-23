import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetApiArticlesMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['articles:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/articles:mediaTypeExtension', args] as const
}

export function useGetApiArticlesMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['articles:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['articles:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiArticlesMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['articles:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['articles:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiArticlesMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['articles:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['articles:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiArticlesMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['articles:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['articles:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBlogMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['blog:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/blog:mediaTypeExtension', args] as const
}

export function useGetApiBlogMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['blog:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['blog:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBlogMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['blog:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['blog:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBlogMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['blog:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['blog:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBlogMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['blog:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['blog:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGlossaryMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/glossary:mediaTypeExtension', args] as const
}

export function useGetApiGlossaryMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGlossaryMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['glossary:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGlossaryMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiGlossaryMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['glossary:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['glossary:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiQuestionsMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['questions:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/questions:mediaTypeExtension', args] as const
}

export function useGetApiQuestionsMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['questions:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['questions:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiQuestionsMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['questions:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['questions:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiQuestionsMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['questions:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['questions:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiQuestionsMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['questions:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['questions:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiStatesMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['states:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/states:mediaTypeExtension', args] as const
}

export function useGetApiStatesMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['states:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['states:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiStatesMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['states:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['states:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiStatesMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['states:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['states:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiStatesMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['states:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['states:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTopicsMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.api)['topics:mediaTypeExtension']['$get']>,
) {
  return ['api', '/api/topics:mediaTypeExtension', args] as const
}

export function useGetApiTopicsMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['topics:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['topics:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiTopicsMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['topics:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['topics:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTopicsMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.api)['topics:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['topics:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiTopicsMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['topics:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['topics:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlogPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['blog', '/blog/:pageName:mediaTypeExtension', args] as const
}

export function useGetBlogPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlogPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blog[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlogPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBlogPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.blog[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEsBlogPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['es', '/es/blog/:pageName:mediaTypeExtension', args] as const
}

export function useGetEsBlogPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsBlogPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.blog[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEsBlogPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsBlogPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.blog)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.blog[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEsGlossaryPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['es', '/es/glossary/:pageName:mediaTypeExtension', args] as const
}

export function useGetEsGlossaryPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsGlossaryPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.glossary[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEsGlossaryPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsGlossaryPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.glossary[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEsQuestionPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['es', '/es/question/:pageName:mediaTypeExtension', args] as const
}

export function useGetEsQuestionPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsQuestionPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.question[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEsQuestionPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsQuestionPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es.question[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEsPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['es', '/es/:pageName:mediaTypeExtension', args] as const
}

export function useGetEsPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEsPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEsStateNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>,
) {
  return ['es', '/es/:stateName:mediaTypeExtension', args] as const
}

export function useGetEsStateNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsStateNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es[':stateName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEsStateNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEsStateNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.es)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.es[':stateName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlossaryPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['glossary', '/glossary/:pageName:mediaTypeExtension', args] as const
}

export function useGetGlossaryPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGlossaryPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.glossary[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlossaryPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGlossaryPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.glossary)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.glossary[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuestionPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>,
) {
  return ['question', '/question/:pageName:mediaTypeExtension', args] as const
}

export function useGetQuestionPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuestionPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.question[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuestionPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuestionPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.question)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.question[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPageNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client)[':pageName:mediaTypeExtension']['$get']>,
) {
  return [':pageName:mediaTypeExtension', '/:pageName:mediaTypeExtension', args] as const
}

export function useGetPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPageNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':pageName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPageNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':pageName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':pageName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStateNameMediaTypeExtensionKey(
  args: InferRequestType<(typeof client)[':stateName:mediaTypeExtension']['$get']>,
) {
  return [':stateName:mediaTypeExtension', '/:stateName:mediaTypeExtension', args] as const
}

export function useGetStateNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':stateName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStateNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':stateName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStateNameMediaTypeExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':stateName:mediaTypeExtension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStateNameMediaTypeExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':stateName:mediaTypeExtension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':stateName:mediaTypeExtension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
