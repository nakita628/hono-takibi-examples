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

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getMarketingCampaigns202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>>,
) {
  return ['marketing', '/marketing/campaigns/2026-09', toValue(args)] as const
}

export function getMarketingCampaigns202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609QueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingCampaigns202609MutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09', 'POST'] as const
}

export function getPostMarketingCampaigns202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']>,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']>,
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
  const mutationDefaults = getPostMarketingCampaigns202609MutationOptions<TError, TOnMutateResult>(
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

export function getMarketingCampaigns202609AssetTypesQueryKey() {
  return ['marketing', '/marketing/campaigns/2026-09/asset-types'] as const
}

export function getMarketingCampaigns202609AssetTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMarketingCampaigns202609AssetTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609AssetTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>
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
                  ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609AssetTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609AssetTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingCampaigns202609AssetTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingCampaigns202609BatchArchiveMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/archive', 'POST'] as const
}

export function getPostMarketingCampaigns202609BatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609BatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].batch.archive.$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609BatchArchive<
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
                      (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609BatchArchiveMutationOptions<
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

export function getPostMarketingCampaigns202609BatchCreateMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/create', 'POST'] as const
}

export function getPostMarketingCampaigns202609BatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609BatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].batch.create.$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609BatchCreate<
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
                    (typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609BatchCreateMutationOptions<
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

export function getPostMarketingCampaigns202609BatchReadMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/read', 'POST'] as const
}

export function getPostMarketingCampaigns202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].batch.read.$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609BatchRead<
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
                    (typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609BatchReadMutationOptions<
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

export function getPostMarketingCampaigns202609BatchUpdateMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/update', 'POST'] as const
}

export function getPostMarketingCampaigns202609BatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609BatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].batch.update.$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609BatchUpdate<
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
                    (typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609BatchUpdateMutationOptions<
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

export function getPostMarketingCampaigns202609CloneMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/clone', 'POST'] as const
}

export function getPostMarketingCampaigns202609CloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609CloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>,
    ) {
      return parseResponse(client.marketing.campaigns['2026-09'].clone.$post(args, options))
    },
  })
}

export function usePostMarketingCampaigns202609Clone<
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
                  ReturnType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>,
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
  const mutationDefaults = getPostMarketingCampaigns202609CloneMutationOptions<
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

export function getMarketingCampaigns202609CloneAssetTypesQueryKey() {
  return ['marketing', '/marketing/campaigns/2026-09/clone/asset-types'] as const
}

export function getMarketingCampaigns202609CloneAssetTypesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getMarketingCampaigns202609CloneAssetTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CloneAssetTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CloneAssetTypesQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CloneAssetTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMarketingCampaigns202609CloneAssetTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/clone/:campaignGuid/status',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CloneCampaignGuidStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CloneCampaignGuidStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingCampaigns202609CampaignGuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', toValue(args)] as const
}

export function getMarketingCampaigns202609CampaignGuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidQueryKey>
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
            ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingCampaigns202609CampaignGuidMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', 'DELETE'] as const
}

export function getDeleteMarketingCampaigns202609CampaignGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingCampaigns202609CampaignGuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingCampaigns202609CampaignGuid<
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
                      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']
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
  const mutationDefaults = getDeleteMarketingCampaigns202609CampaignGuidMutationOptions<
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

export function getPatchMarketingCampaigns202609CampaignGuidMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', 'PATCH'] as const
}

export function getPatchMarketingCampaigns202609CampaignGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingCampaigns202609CampaignGuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].$patch(args, options),
      )
    },
  })
}

export function usePatchMarketingCampaigns202609CampaignGuid<
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']
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
  const mutationDefaults = getPatchMarketingCampaigns202609CampaignGuidMutationOptions<
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

export function getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidAssetsAssetType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType/:assetId',
    'PUT',
  ] as const
}

export function getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][
          ':assetId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
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
                      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
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
    getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
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

export function getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType/:assetId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][
          ':assetId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
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
                      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
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
    getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
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

export function getPostMarketingCampaigns202609CampaignGuidBudgetMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget', 'POST'] as const
}

export function getPostMarketingCampaigns202609CampaignGuidBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609CampaignGuidBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget.$post(args, options),
      )
    },
  })
}

export function usePostMarketingCampaigns202609CampaignGuidBudget<
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609CampaignGuidBudgetMutationOptions<
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

export function getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/totals',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidBudgetTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidBudgetBudgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId',
    'PUT',
  ] as const
}

export function getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMarketingCampaigns202609CampaignGuidBudgetBudgetId<
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
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
  const mutationDefaults = getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
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

export function getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetId<
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
                      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
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
    getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
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

export function getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/reports/contacts/:contactType',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[
          ':contactType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidReportsContactsContactType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey
          >
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[
            ':contactType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/reports/metrics',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidReportsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/reports/revenue',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsRevenueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidReportsRevenue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingCampaigns202609CampaignGuidSpendMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend', 'POST'] as const
}

export function getPostMarketingCampaigns202609CampaignGuidSpendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingCampaigns202609CampaignGuidSpendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].spend.$post(args, options),
      )
    },
  })
}

export function usePostMarketingCampaigns202609CampaignGuidSpend<
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
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
  const mutationDefaults = getPostMarketingCampaigns202609CampaignGuidSpendMutationOptions<
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

export function getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId',
    toValue(args),
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMarketingCampaigns202609CampaignGuidSpendSpendId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey>
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
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutMarketingCampaigns202609CampaignGuidSpendSpendIdMutationKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId', 'PUT'] as const
}

export function getPutMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMarketingCampaigns202609CampaignGuidSpendSpendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMarketingCampaigns202609CampaignGuidSpendSpendId<
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
                    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
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
  const mutationDefaults = getPutMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
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

export function getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdMutationKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId',
    'DELETE',
  ] as const
}

export function getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMarketingCampaigns202609CampaignGuidSpendSpendId<
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
                      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
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
  const mutationDefaults = getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
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
