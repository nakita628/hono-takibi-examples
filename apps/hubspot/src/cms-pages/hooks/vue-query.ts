import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsPages202609LandingPagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages', toValue(args)] as const
}

export function getCmsPages202609LandingPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsPages202609LandingPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609LandingPagesMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>,
    ) {
      return parseResponse(client.cms.pages['2026-09']['landing-pages'].$post(args, options))
    },
  })
}

export function usePostCmsPages202609LandingPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['$post']>,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesMutationOptions<
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

export function getPostCmsPages202609LandingPagesAbTestCreateVariationMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/create-variation', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesAbTestCreateVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesAbTestCreateVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['ab-test']['create-variation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesAbTestCreateVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['create-variation']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesAbTestCreateVariationMutationOptions<
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

export function getPostCmsPages202609LandingPagesAbTestEndMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/end', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesAbTestEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesAbTestEndMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['ab-test'].end.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesAbTestEnd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['end']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesAbTestEndMutationOptions<
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

export function getPostCmsPages202609LandingPagesAbTestRerunMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/ab-test/rerun', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesAbTestRerunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesAbTestRerunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['ab-test'].rerun.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesAbTestRerun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['ab-test']['rerun']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesAbTestRerunMutationOptions<
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

export function getPostCmsPages202609LandingPagesBatchArchiveMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/archive', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['archive']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesBatchArchiveMutationOptions<
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

export function getPostCmsPages202609LandingPagesBatchCreateMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/create', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['create']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesBatchCreateMutationOptions<
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

export function getPostCmsPages202609LandingPagesBatchReadMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/read', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['read']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesBatchReadMutationOptions<
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

export function getPostCmsPages202609LandingPagesBatchUpdateMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/batch/update', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['batch']['update']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesBatchUpdateMutationOptions<
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

export function getPostCmsPages202609LandingPagesCloneMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/clone', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']
      >,
    ) {
      return parseResponse(client.cms.pages['2026-09']['landing-pages'].clone.$post(args, options))
    },
  })
}

export function usePostCmsPages202609LandingPagesClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['clone']['$post']>,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesCloneMutationOptions<
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

export function getCmsPages202609LandingPagesFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders', toValue(args)] as const
}

export function getCmsPages202609LandingPagesFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']
                  >
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
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsPages202609LandingPagesFoldersQueryKey>
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
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609LandingPagesFoldersMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFolders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesFoldersMutationOptions<
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

export function getPostCmsPages202609LandingPagesFoldersBatchArchiveMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/archive', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesFoldersBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesFoldersBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFoldersBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['archive']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesFoldersBatchArchiveMutationOptions<
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

export function getPostCmsPages202609LandingPagesFoldersBatchCreateMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/create', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesFoldersBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesFoldersBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFoldersBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['create']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesFoldersBatchCreateMutationOptions<
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

export function getPostCmsPages202609LandingPagesFoldersBatchReadMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/read', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesFoldersBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesFoldersBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFoldersBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['read']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesFoldersBatchReadMutationOptions<
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

export function getPostCmsPages202609LandingPagesFoldersBatchUpdateMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/batch/update', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesFoldersBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesFoldersBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders.batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFoldersBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders']['batch']['update']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesFoldersBatchUpdateMutationOptions<
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

export function getCmsPages202609LandingPagesFoldersObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
    >
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', toValue(args)] as const
}

export function getCmsPages202609LandingPagesFoldersObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesFoldersObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesFoldersObjectId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesFoldersObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsPages202609LandingPagesFoldersObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', 'DELETE'] as const
}

export function getDeleteCmsPages202609LandingPagesFoldersObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsPages202609LandingPagesFoldersObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCmsPages202609LandingPagesFoldersObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$delete']
          >,
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
  const mutationDefaults = getDeleteCmsPages202609LandingPagesFoldersObjectIdMutationOptions<
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

export function getPatchCmsPages202609LandingPagesFoldersObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/folders/:objectId', 'PATCH'] as const
}

export function getPatchCmsPages202609LandingPagesFoldersObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsPages202609LandingPagesFoldersObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCmsPages202609LandingPagesFoldersObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['$patch']
          >,
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
  const mutationDefaults = getPatchCmsPages202609LandingPagesFoldersObjectIdMutationOptions<
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

export function getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions',
    toValue(args),
  ] as const
}

export function getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCmsPages202609LandingPagesFoldersObjectIdRevisions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesFoldersObjectIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions/:revisionId',
    toValue(args),
  ] as const
}

export function getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
          ':revisionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
            ':revisionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/folders/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].folders[':objectId'].revisions[
          ':revisionId'
        ].restore.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['folders'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreMutationOptions<
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

export function getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['multi-language'][
          'attach-to-lang-group'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesMultiLanguageAttachToLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['attach-to-lang-group']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['multi-language'][
          'create-language-variation'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['create-language-variation']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['multi-language'][
          'detach-from-lang-group'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['detach-from-lang-group']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['multi-language']['set-new-lang-primary'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['set-new-lang-primary']['$put']
          >,
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
  const mutationDefaults =
    getPutCmsPages202609LandingPagesMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/multi-language/update-languages',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages']['multi-language']['update-languages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesMultiLanguageUpdateLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['multi-language']['update-languages']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesMultiLanguageUpdateLanguagesMutationOptions<
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

export function getPostCmsPages202609LandingPagesScheduleMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/schedule', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'].schedule.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages']['schedule']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesScheduleMutationOptions<
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

export function getCmsPages202609LandingPagesObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', toValue(args)] as const
}

export function getCmsPages202609LandingPagesObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
                  >
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
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsPages202609LandingPagesObjectIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsPages202609LandingPagesObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', 'DELETE'] as const
}

export function getDeleteCmsPages202609LandingPagesObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsPages202609LandingPagesObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCmsPages202609LandingPagesObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$delete']
          >,
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
  const mutationDefaults = getDeleteCmsPages202609LandingPagesObjectIdMutationOptions<
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

export function getPatchCmsPages202609LandingPagesObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId', 'PATCH'] as const
}

export function getPatchCmsPages202609LandingPagesObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsPages202609LandingPagesObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCmsPages202609LandingPagesObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['$patch']
          >,
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
  const mutationDefaults = getPatchCmsPages202609LandingPagesObjectIdMutationOptions<
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

export function getCmsPages202609LandingPagesObjectIdDraftQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
    >
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft', toValue(args)] as const
}

export function getCmsPages202609LandingPagesObjectIdDraftQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesObjectIdDraftQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesObjectIdDraft<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesObjectIdDraftQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesObjectIdDraftQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesObjectIdDraftQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCmsPages202609LandingPagesObjectIdDraftMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft', 'PATCH'] as const
}

export function getPatchCmsPages202609LandingPagesObjectIdDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsPages202609LandingPagesObjectIdDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.$patch(args, options),
      )
    },
  })
}

export function usePatchCmsPages202609LandingPagesObjectIdDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['$patch']
          >,
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
  const mutationDefaults = getPatchCmsPages202609LandingPagesObjectIdDraftMutationOptions<
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

export function getPostCmsPages202609LandingPagesObjectIdDraftPushLiveMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft/push-live', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesObjectIdDraftPushLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesObjectIdDraftPushLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].draft['push-live'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesObjectIdDraftPushLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['push-live']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesObjectIdDraftPushLiveMutationOptions<
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

export function getPostCmsPages202609LandingPagesObjectIdDraftResetMutationKey() {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/draft/reset', 'POST'] as const
}

export function getPostCmsPages202609LandingPagesObjectIdDraftResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesObjectIdDraftResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].draft.reset.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesObjectIdDraftReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['draft']['reset']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609LandingPagesObjectIdDraftResetMutationOptions<
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

export function getCmsPages202609LandingPagesObjectIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
    >
  >,
) {
  return ['cms', '/cms/pages/2026-09/landing-pages/:objectId/revisions', toValue(args)] as const
}

export function getCmsPages202609LandingPagesObjectIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609LandingPagesObjectIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609LandingPagesObjectIdRevisions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesObjectIdRevisionsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesObjectIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609LandingPagesObjectIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId',
    toValue(args),
  ] as const
}

export function getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCmsPages202609LandingPagesObjectIdRevisionsRevisionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[
          ':revisionId'
        ].restore.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreMutationOptions<
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

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/landing-pages/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['landing-pages'][':objectId'].revisions[':revisionId'][
          'restore-to-draft'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['landing-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
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

export function getCmsPages202609SitePagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages', toValue(args)] as const
}

export function getCmsPages202609SitePagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609SitePagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609SitePages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsPages202609SitePagesQueryKey>
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
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609SitePagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609SitePagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['site-pages'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609SitePagesMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages', 'POST'] as const
}

export function getPostCmsPages202609SitePagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>,
    ) {
      return parseResponse(client.cms.pages['2026-09']['site-pages'].$post(args, options))
    },
  })
}

export function usePostCmsPages202609SitePages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['$post']>,
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
  const mutationDefaults = getPostCmsPages202609SitePagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostCmsPages202609SitePagesAbTestCreateVariationMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/create-variation', 'POST'] as const
}

export function getPostCmsPages202609SitePagesAbTestCreateVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesAbTestCreateVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['ab-test']['create-variation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesAbTestCreateVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['create-variation']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesAbTestCreateVariationMutationOptions<
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

export function getPostCmsPages202609SitePagesAbTestEndMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/end', 'POST'] as const
}

export function getPostCmsPages202609SitePagesAbTestEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesAbTestEndMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['ab-test'].end.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesAbTestEnd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['end']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesAbTestEndMutationOptions<
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

export function getPostCmsPages202609SitePagesAbTestRerunMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/ab-test/rerun', 'POST'] as const
}

export function getPostCmsPages202609SitePagesAbTestRerunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesAbTestRerunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['ab-test'].rerun.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesAbTestRerun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['ab-test']['rerun']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesAbTestRerunMutationOptions<
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

export function getPostCmsPages202609SitePagesBatchArchiveMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/archive', 'POST'] as const
}

export function getPostCmsPages202609SitePagesBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'].batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['archive']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesBatchArchiveMutationOptions<
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

export function getPostCmsPages202609SitePagesBatchCreateMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/create', 'POST'] as const
}

export function getPostCmsPages202609SitePagesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['create']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesBatchCreateMutationOptions<
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

export function getPostCmsPages202609SitePagesBatchReadMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/read', 'POST'] as const
}

export function getPostCmsPages202609SitePagesBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['read']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesBatchReadMutationOptions<
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

export function getPostCmsPages202609SitePagesBatchUpdateMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/batch/update', 'POST'] as const
}

export function getPostCmsPages202609SitePagesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['batch']['update']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesBatchUpdateMutationOptions<
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

export function getPostCmsPages202609SitePagesCloneMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/clone', 'POST'] as const
}

export function getPostCmsPages202609SitePagesCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>,
    ) {
      return parseResponse(client.cms.pages['2026-09']['site-pages'].clone.$post(args, options))
    },
  })
}

export function usePostCmsPages202609SitePagesClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['clone']['$post']>,
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
  const mutationDefaults = getPostCmsPages202609SitePagesCloneMutationOptions<
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

export function getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group',
    'POST',
  ] as const
}

export function getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['multi-language']['attach-to-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesMultiLanguageAttachToLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['attach-to-lang-group']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesMultiLanguageAttachToLangGroupMutationOptions<
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

export function getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/create-language-variation',
    'POST',
  ] as const
}

export function getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['multi-language'][
          'create-language-variation'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesMultiLanguageCreateLanguageVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['create-language-variation']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesMultiLanguageCreateLanguageVariationMutationOptions<
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

export function getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group',
    'POST',
  ] as const
}

export function getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['multi-language']['detach-from-lang-group'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesMultiLanguageDetachFromLangGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['detach-from-lang-group']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesMultiLanguageDetachFromLangGroupMutationOptions<
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

export function getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary',
    'PUT',
  ] as const
}

export function getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['multi-language']['set-new-lang-primary'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCmsPages202609SitePagesMultiLanguageSetNewLangPrimary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['set-new-lang-primary']['$put']
          >,
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
  const mutationDefaults =
    getPutCmsPages202609SitePagesMultiLanguageSetNewLangPrimaryMutationOptions<
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

export function getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/multi-language/update-languages', 'POST'] as const
}

export function getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages']['multi-language']['update-languages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesMultiLanguageUpdateLanguages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages']['multi-language']['update-languages']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesMultiLanguageUpdateLanguagesMutationOptions<
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

export function getPostCmsPages202609SitePagesScheduleMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/schedule', 'POST'] as const
}

export function getPostCmsPages202609SitePagesScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']
      >,
    ) {
      return parseResponse(client.cms.pages['2026-09']['site-pages'].schedule.$post(args, options))
    },
  })
}

export function usePostCmsPages202609SitePagesSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages']['schedule']['$post']>,
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
  const mutationDefaults = getPostCmsPages202609SitePagesScheduleMutationOptions<
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

export function getCmsPages202609SitePagesObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', toValue(args)] as const
}

export function getCmsPages202609SitePagesObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609SitePagesObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609SitePagesObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']
                  >
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
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsPages202609SitePagesObjectIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609SitePagesObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609SitePagesObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsPages202609SitePagesObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', 'DELETE'] as const
}

export function getDeleteCmsPages202609SitePagesObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsPages202609SitePagesObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCmsPages202609SitePagesObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$delete']
          >,
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
  const mutationDefaults = getDeleteCmsPages202609SitePagesObjectIdMutationOptions<
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

export function getPatchCmsPages202609SitePagesObjectIdMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId', 'PATCH'] as const
}

export function getPatchCmsPages202609SitePagesObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsPages202609SitePagesObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCmsPages202609SitePagesObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['$patch']
          >,
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
  const mutationDefaults = getPatchCmsPages202609SitePagesObjectIdMutationOptions<
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

export function getCmsPages202609SitePagesObjectIdDraftQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
    >
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft', toValue(args)] as const
}

export function getCmsPages202609SitePagesObjectIdDraftQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609SitePagesObjectIdDraftQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609SitePagesObjectIdDraft<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609SitePagesObjectIdDraftQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609SitePagesObjectIdDraftQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609SitePagesObjectIdDraftQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCmsPages202609SitePagesObjectIdDraftMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft', 'PATCH'] as const
}

export function getPatchCmsPages202609SitePagesObjectIdDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsPages202609SitePagesObjectIdDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].draft.$patch(args, options),
      )
    },
  })
}

export function usePatchCmsPages202609SitePagesObjectIdDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['$patch']
          >,
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
  const mutationDefaults = getPatchCmsPages202609SitePagesObjectIdDraftMutationOptions<
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

export function getPostCmsPages202609SitePagesObjectIdDraftPushLiveMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft/push-live', 'POST'] as const
}

export function getPostCmsPages202609SitePagesObjectIdDraftPushLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesObjectIdDraftPushLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].draft['push-live'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesObjectIdDraftPushLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['push-live']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesObjectIdDraftPushLiveMutationOptions<
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

export function getPostCmsPages202609SitePagesObjectIdDraftResetMutationKey() {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/draft/reset', 'POST'] as const
}

export function getPostCmsPages202609SitePagesObjectIdDraftResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesObjectIdDraftResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].draft.reset.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesObjectIdDraftReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['draft']['reset']['$post']
          >,
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
  const mutationDefaults = getPostCmsPages202609SitePagesObjectIdDraftResetMutationOptions<
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

export function getCmsPages202609SitePagesObjectIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
    >
  >,
) {
  return ['cms', '/cms/pages/2026-09/site-pages/:objectId/revisions', toValue(args)] as const
}

export function getCmsPages202609SitePagesObjectIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609SitePagesObjectIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsPages202609SitePagesObjectIdRevisions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609SitePagesObjectIdRevisionsQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609SitePagesObjectIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609SitePagesObjectIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId',
    toValue(args),
  ] as const
}

export function getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCmsPages202609SitePagesObjectIdRevisionsRevisionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsPages202609SitePagesObjectIdRevisionsRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[
          ':revisionId'
        ].restore.$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreMutationOptions<
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

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftMutationKey() {
  return [
    'cms',
    '/cms/pages/2026-09/site-pages/:objectId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
      >,
    ) {
      return parseResponse(
        client.cms.pages['2026-09']['site-pages'][':objectId'].revisions[':revisionId'][
          'restore-to-draft'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.cms.pages)['2026-09']['site-pages'][':objectId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >,
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
  const mutationDefaults =
    getPostCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftMutationOptions<
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
