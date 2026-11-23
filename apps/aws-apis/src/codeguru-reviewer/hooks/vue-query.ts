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

export function getAssociationsKey() {
  return ['associations'] as const
}

export function getCodereviewsKey() {
  return ['codereviews'] as const
}

export function getCodereviewsTypeKey() {
  return ['codereviews#Type'] as const
}

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getAssociationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations', keyArgs] as const
}

export function getAssociationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.associations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
          >,
          ReturnType<typeof getAssociationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssociationsMutationKey() {
  return ['associations', '/associations', 'POST'] as const
}

export function getPostAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.associations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associations.$post>) {
      return parseResponse(client.associations.$post(args, options))
    },
  })
}

export function usePostAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.associations.$post>,
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
  const mutationDefaults = getPostAssociationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCodereviewsMutationKey() {
  return ['codereviews', '/codereviews', 'POST'] as const
}

export function getPostCodereviewsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.codereviews.$post>>>>>,
    TError,
    InferRequestType<typeof client.codereviews.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCodereviewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.codereviews.$post>) {
      return parseResponse(client.codereviews.$post(args, options))
    },
  })
}

export function usePostCodereviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.codereviews.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.codereviews.$post>,
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
  const mutationDefaults = getPostCodereviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCodereviewsCodeReviewArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['codereviews', '/codereviews/:CodeReviewArn', keyArgs] as const
}

export function getCodereviewsCodeReviewArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCodereviewsCodeReviewArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.codereviews[':CodeReviewArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCodereviewsCodeReviewArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCodereviewsCodeReviewArnQueryKey>
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
          Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsCodeReviewArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCodereviewsCodeReviewArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.codereviews[':CodeReviewArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedbackCodeReviewArnRecommendationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['feedback', '/feedback/:CodeReviewArn#RecommendationId', keyArgs] as const
}

export function getFeedbackCodeReviewArnRecommendationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedbackCodeReviewArnRecommendationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feedback[':CodeReviewArn#RecommendationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedbackCodeReviewArnRecommendationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>
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
                  ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFeedbackCodeReviewArnRecommendationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedbackCodeReviewArnRecommendationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedbackCodeReviewArnRecommendationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feedback[':CodeReviewArn#RecommendationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsAssociationArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/:AssociationArn', keyArgs] as const
}

export function getAssociationsAssociationArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsAssociationArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations[':AssociationArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsAssociationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationsAssociationArnQueryKey>
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
          Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsAssociationArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsAssociationArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations[':AssociationArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssociationsAssociationArnMutationKey() {
  return ['associations', '/associations/:AssociationArn', 'DELETE'] as const
}

export function getDeleteAssociationsAssociationArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.associations)[':AssociationArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssociationsAssociationArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.associations)[':AssociationArn']['$delete']>,
    ) {
      return parseResponse(client.associations[':AssociationArn'].$delete(args, options))
    },
  })
}

export function useDeleteAssociationsAssociationArn<
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
                Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.associations)[':AssociationArn']['$delete']>,
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
  const mutationDefaults = getDeleteAssociationsAssociationArnMutationOptions<
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

export function getCodereviewsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['codereviews#Type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['codereviews#Type', '/codereviews#Type', keyArgs] as const
}

export function getCodereviewsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['codereviews#Type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCodereviewsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['codereviews#Type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCodereviewsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['codereviews#Type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
            >
          >,
          ReturnType<typeof getCodereviewsTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCodereviewsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['codereviews#Type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedbackCodeReviewArnRecommendationFeedbackQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['feedback', '/feedback/:CodeReviewArn/RecommendationFeedback', keyArgs] as const
}

export function getFeedbackCodeReviewArnRecommendationFeedbackQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedbackCodeReviewArnRecommendationFeedbackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feedback[':CodeReviewArn'].RecommendationFeedback.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedbackCodeReviewArnRecommendationFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']>
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
                    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
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
                    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeedbackCodeReviewArnRecommendationFeedbackQueryKey>
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
            ReturnType<(typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedbackCodeReviewArnRecommendationFeedbackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedbackCodeReviewArnRecommendationFeedbackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feedback[':CodeReviewArn'].RecommendationFeedback.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCodereviewsCodeReviewArnRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['codereviews', '/codereviews/:CodeReviewArn/Recommendations', keyArgs] as const
}

export function getCodereviewsCodeReviewArnRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCodereviewsCodeReviewArnRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.codereviews[':CodeReviewArn'].Recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCodereviewsCodeReviewArnRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>
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
                    (typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']
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
                    (typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCodereviewsCodeReviewArnRecommendationsQueryKey>
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
            ReturnType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsCodeReviewArnRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCodereviewsCodeReviewArnRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.codereviews[':CodeReviewArn'].Recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPutFeedbackMutationKey() {
  return ['feedback', '/feedback', 'PUT'] as const
}

export function getPutFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>>,
    TError,
    InferRequestType<typeof client.feedback.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feedback.$put>) {
      return parseResponse(client.feedback.$put(args, options))
    },
  })
}

export function usePutFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.feedback.$put>,
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
  const mutationDefaults = getPutFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
