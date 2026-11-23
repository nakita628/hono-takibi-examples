import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getGetCmsPages202609LandingPagesKey(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages', args] as const
}

export function useGetCmsPages202609LandingPages<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
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
        ? getGetCmsPages202609LandingPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.pages['2026-09']['landing-pages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPages<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
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
        ? getGetCmsPages202609LandingPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.pages['2026-09']['landing-pages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages', 'POST'] as const
}

export function usePostCmsPages202609LandingPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>
        },
      ) => parseResponse(client.cms.pages['2026-09']['landing-pages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesAbTestCreateVariationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/create-variation', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesAbTestCreateVariation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesAbTestCreateVariationKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['ab-test']['create-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesAbTestEndKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/end', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesAbTestEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesAbTestEndKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['ab-test'].end.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesAbTestRerunKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/rerun', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesAbTestRerun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesAbTestRerunKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['ab-test'].rerun.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesBatchArchiveKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/archive', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesBatchArchiveKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesBatchCreateKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/create', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesBatchCreateKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesBatchReadKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/read', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesBatchReadKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesBatchUpdateKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/update', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesBatchUpdateKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesCloneKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/clone', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesCloneKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']
          >
        },
      ) =>
        parseResponse(client.cms.pages['2026-09']['landing-pages'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesFoldersKey(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders', args] as const
}

export function useGetCmsPages202609LandingPagesFolders<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
            >
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
        ? getGetCmsPages202609LandingPagesFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesFolders<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
            >
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
        ? getGetCmsPages202609LandingPagesFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesFoldersKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersBatchArchiveKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/archive', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesFoldersBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesFoldersBatchArchiveKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.batch.archive.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersBatchCreateKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/create', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesFoldersBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesFoldersBatchCreateKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.batch.create.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersBatchReadKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/read', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesFoldersBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesFoldersBatchReadKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersBatchUpdateKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/update', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesFoldersBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesFoldersBatchUpdateKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.batch.update.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesFoldersObjectIdKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', args] as const
}

export function useGetCmsPages202609LandingPagesFoldersObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesFoldersObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsPages202609LandingPagesFoldersObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', 'DELETE'] as const
}

export function useDeleteCmsPages202609LandingPagesFoldersObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsPages202609LandingPagesFoldersObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsPages202609LandingPagesFoldersObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', 'PATCH'] as const
}

export function usePatchCmsPages202609LandingPagesFoldersObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsPages202609LandingPagesFoldersObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions', args] as const
}

export function useGetCmsPages202609LandingPagesFoldersObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesFoldersObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
  >,
) {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions/:revisionId',
    args,
  ] as const
}

export function useGetCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
            ':revisionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
            ':revisionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
            ':revisionId'
          ].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['multi-language'][
            'attach-to-lang-group'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['multi-language'][
            'create-language-variation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['multi-language'][
            'detach-from-lang-group'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function usePutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['multi-language'][
            'set-new-lang-primary'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/update-languages',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesMultiLanguageUpdateLanguages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages']['multi-language']['update-languages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesScheduleKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/schedule', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesScheduleKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'].schedule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesObjectIdKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', args] as const
}

export function useGetCmsPages202609LandingPagesObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsPages202609LandingPagesObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', 'DELETE'] as const
}

export function useDeleteCmsPages202609LandingPagesObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsPages202609LandingPagesObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsPages202609LandingPagesObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', 'PATCH'] as const
}

export function usePatchCmsPages202609LandingPagesObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsPages202609LandingPagesObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesObjectIdDraftKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft', args] as const
}

export function useGetCmsPages202609LandingPagesObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchCmsPages202609LandingPagesObjectIdDraftKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft', 'PATCH'] as const
}

export function usePatchCmsPages202609LandingPagesObjectIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsPages202609LandingPagesObjectIdDraftKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesObjectIdDraftPushLiveKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft/push-live', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesObjectIdDraftPushLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesObjectIdDraftPushLiveKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft['push-live'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesObjectIdDraftResetKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft/reset', 'POST'] as const
}

export function usePostCmsPages202609LandingPagesObjectIdDraftReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609LandingPagesObjectIdDraftResetKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesObjectIdRevisionsKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/revisions', args] as const
}

export function useGetCmsPages202609LandingPagesObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsPages202609LandingPagesObjectIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId', args] as const
}

export function useGetCmsPages202609LandingPagesObjectIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609LandingPagesObjectIdRevisionsRevisionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609LandingPagesObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[
            ':revisionId'
          ].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function usePostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraft<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftKey()
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
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'][
            'restore-to-draft'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609SitePagesKey(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>,
) {
  return ['cms', '/cms/pages/2026-09/site-pages', args] as const
}

export function useGetCmsPages202609SitePages<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
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
        ? getGetCmsPages202609SitePagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.pages['2026-09']['site-pages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609SitePages<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
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
        ? getGetCmsPages202609SitePagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cms.pages['2026-09']['site-pages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesKey() {
  return ['cms', '/cms/pages/2026-09/site-pages', 'POST'] as const
}

export function usePostCmsPages202609SitePages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']> },
      ) => parseResponse(client.cms.pages['2026-09']['site-pages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesAbTestCreateVariationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/create-variation', 'POST'] as const
}

export function usePostCmsPages202609SitePagesAbTestCreateVariation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesAbTestCreateVariationKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['ab-test']['create-variation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesAbTestEndKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/end', 'POST'] as const
}

export function usePostCmsPages202609SitePagesAbTestEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesAbTestEndKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['ab-test'].end.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesAbTestRerunKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/rerun', 'POST'] as const
}

export function usePostCmsPages202609SitePagesAbTestRerun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesAbTestRerunKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['ab-test'].rerun.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesBatchArchiveKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/archive', 'POST'] as const
}

export function usePostCmsPages202609SitePagesBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesBatchArchiveKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesBatchCreateKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/create', 'POST'] as const
}

export function usePostCmsPages202609SitePagesBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesBatchCreateKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesBatchReadKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/read', 'POST'] as const
}

export function usePostCmsPages202609SitePagesBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesBatchReadKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesBatchUpdateKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/update', 'POST'] as const
}

export function usePostCmsPages202609SitePagesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesBatchUpdateKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesCloneKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/clone', 'POST'] as const
}

export function usePostCmsPages202609SitePagesClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesCloneKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']
          >
        },
      ) => parseResponse(client.cms.pages['2026-09']['site-pages'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function usePostCmsPages202609SitePagesMultiLanguageAttachToLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['multi-language']['attach-to-lang-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function usePostCmsPages202609SitePagesMultiLanguageCreateLanguageVariation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['multi-language'][
            'create-language-variation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function usePostCmsPages202609SitePagesMultiLanguageDetachFromLangGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['multi-language'][
            'detach-from-lang-group'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function usePutCmsPages202609SitePagesMultiLanguageSetNewLangPrimary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['multi-language']['set-new-lang-primary'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/multi-language/update-languages', 'POST'] as const
}

export function usePostCmsPages202609SitePagesMultiLanguageUpdateLanguages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages']['multi-language']['update-languages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesScheduleKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/schedule', 'POST'] as const
}

export function usePostCmsPages202609SitePagesSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesScheduleKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']
          >
        },
      ) =>
        parseResponse(client.cms.pages['2026-09']['site-pages'].schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609SitePagesObjectIdKey(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', args] as const
}

export function useGetCmsPages202609SitePagesObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
            >
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
        ? getGetCmsPages202609SitePagesObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609SitePagesObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
            >
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
        ? getGetCmsPages202609SitePagesObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCmsPages202609SitePagesObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', 'DELETE'] as const
}

export function useDeleteCmsPages202609SitePagesObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsPages202609SitePagesObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCmsPages202609SitePagesObjectIdKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', 'PATCH'] as const
}

export function usePatchCmsPages202609SitePagesObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsPages202609SitePagesObjectIdKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609SitePagesObjectIdDraftKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft', args] as const
}

export function useGetCmsPages202609SitePagesObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609SitePagesObjectIdDraft<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchCmsPages202609SitePagesObjectIdDraftKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft', 'PATCH'] as const
}

export function usePatchCmsPages202609SitePagesObjectIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCmsPages202609SitePagesObjectIdDraftKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesObjectIdDraftPushLiveKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft/push-live', 'POST'] as const
}

export function usePostCmsPages202609SitePagesObjectIdDraftPushLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesObjectIdDraftPushLiveKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft['push-live'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesObjectIdDraftResetKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft/reset', 'POST'] as const
}

export function usePostCmsPages202609SitePagesObjectIdDraftReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesObjectIdDraftResetKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft.reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsPages202609SitePagesObjectIdRevisionsKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/revisions', args] as const
}

export function useGetCmsPages202609SitePagesObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609SitePagesObjectIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsPages202609SitePagesObjectIdRevisionsRevisionIdKey(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId', args] as const
}

export function useGetCmsPages202609SitePagesObjectIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsPages202609SitePagesObjectIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
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
        ? getGetCmsPages202609SitePagesObjectIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function usePostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[
            ':revisionId'
          ].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function usePostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraft<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftKey()
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
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'][
            'restore-to-draft'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
