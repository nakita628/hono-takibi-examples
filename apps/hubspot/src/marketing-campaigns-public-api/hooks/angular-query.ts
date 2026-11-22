import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getMarketingCampaigns202609QueryKey(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
) {
  return ['marketing', '/marketing/campaigns/2026-09', args] as const
}

export function getMarketingCampaigns202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609AssetTypesQueryKey() {
  return ['marketing', '/marketing/campaigns/2026-09/asset-types'] as const
}

export function getMarketingCampaigns202609AssetTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609AssetTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609AssetTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMarketingCampaigns202609AssetTypesQueryKey>
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
      ...getMarketingCampaigns202609AssetTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609BatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609BatchArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609BatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609BatchCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609BatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609BatchReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609BatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609BatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609Clone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609CloneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CloneAssetTypesQueryKey() {
  return ['marketing', '/marketing/campaigns/2026-09/clone/asset-types'] as const
}

export function getMarketingCampaigns202609CloneAssetTypesQueryOptions<
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
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CloneAssetTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CloneAssetTypes<
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
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CloneAssetTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/clone/:campaignGuid/status', args] as const
}

export function getMarketingCampaigns202609CloneCampaignGuidStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CloneCampaignGuidStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CloneCampaignGuidStatus<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CloneCampaignGuidStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidQueryKey(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', args] as const
}

export function getMarketingCampaigns202609CampaignGuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMarketingCampaigns202609CampaignGuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingCampaigns202609CampaignGuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMarketingCampaigns202609CampaignGuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingCampaigns202609CampaignGuidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType',
    args,
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidAssetsAssetType<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidAssetsAssetTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609CampaignGuidBudget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609CampaignGuidBudgetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget/totals', args] as const
}

export function getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidBudgetTotals<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidBudgetTotalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId', args] as const
}

export function getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidBudgetBudgetId<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidBudgetBudgetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMarketingCampaigns202609CampaignGuidBudgetBudgetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/reports/contacts/:contactType',
    args,
  ] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[
          ':contactType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidReportsContactsContactType<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidReportsContactsContactTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/reports/metrics', args] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsMetricsQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidReportsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidReportsMetrics<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidReportsMetricsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/reports/revenue', args] as const
}

export function getMarketingCampaigns202609CampaignGuidReportsRevenueQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidReportsRevenueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidReportsRevenue<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidReportsRevenueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMarketingCampaigns202609CampaignGuidSpend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingCampaigns202609CampaignGuidSpendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId', args] as const
}

export function getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketingCampaigns202609CampaignGuidSpendSpendId<
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
  args: () => InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getMarketingCampaigns202609CampaignGuidSpendSpendIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutMarketingCampaigns202609CampaignGuidSpendSpendId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMarketingCampaigns202609CampaignGuidSpendSpendId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
