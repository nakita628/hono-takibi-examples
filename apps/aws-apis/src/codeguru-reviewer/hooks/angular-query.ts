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

export function getAssociationsQueryKey(args: InferRequestType<typeof client.associations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations', keyArgs] as const
}

export function getAssociationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.associations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssociationsQueryKey>
  >({
    queryKey: getAssociationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAssociations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.associations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAssociationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssociationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.associations.$post>,
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
    const mutationDefaults = getPostAssociationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCodereviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.codereviews.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.codereviews.$post>,
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
    const mutationDefaults = getPostCodereviewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCodereviewsCodeReviewArnQueryKey(
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['codereviews', '/codereviews/:CodeReviewArn', keyArgs] as const
}

export function getCodereviewsCodeReviewArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCodereviewsCodeReviewArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.codereviews[':CodeReviewArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCodereviewsCodeReviewArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.codereviews)[':CodeReviewArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCodereviewsCodeReviewArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFeedbackCodeReviewArnRecommendationIdQueryKey(
  args: InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['feedback', '/feedback/:CodeReviewArn#RecommendationId', keyArgs] as const
}

export function getFeedbackCodeReviewArnRecommendationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeedbackCodeReviewArnRecommendationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feedback[':CodeReviewArn#RecommendationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFeedbackCodeReviewArnRecommendationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feedback)[':CodeReviewArn#RecommendationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFeedbackCodeReviewArnRecommendationIdQueryKey>
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
      ...getFeedbackCodeReviewArnRecommendationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAssociationsAssociationArnQueryKey(
  args: InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/:AssociationArn', keyArgs] as const
}

export function getAssociationsAssociationArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAssociationsAssociationArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations[':AssociationArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAssociationsAssociationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations)[':AssociationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations)[':AssociationArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAssociationsAssociationArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteAssociationsAssociationArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAssociationsAssociationArnMutationOptions<
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

export function getCodereviewsTypeQueryKey(
  args: InferRequestType<(typeof client)['codereviews#Type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['codereviews#Type', '/codereviews#Type', keyArgs] as const
}

export function getCodereviewsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['codereviews#Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsTypeQueryKey>
  >({
    queryKey: getCodereviewsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['codereviews#Type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCodereviewsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['codereviews#Type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['codereviews#Type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCodereviewsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCodereviewsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFeedbackCodeReviewArnRecommendationFeedbackQueryKey(
  args: InferRequestType<
    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['feedback', '/feedback/:CodeReviewArn/RecommendationFeedback', keyArgs] as const
}

export function getFeedbackCodeReviewArnRecommendationFeedbackQueryOptions<
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
  args: InferRequestType<
    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeedbackCodeReviewArnRecommendationFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feedback[':CodeReviewArn'].RecommendationFeedback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFeedbackCodeReviewArnRecommendationFeedback<
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
  args: () => InferRequestType<
    (typeof client.feedback)[':CodeReviewArn']['RecommendationFeedback']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getFeedbackCodeReviewArnRecommendationFeedbackQueryKey>
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
      ...getFeedbackCodeReviewArnRecommendationFeedbackQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCodereviewsCodeReviewArnRecommendationsQueryKey(
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['codereviews', '/codereviews/:CodeReviewArn/Recommendations', keyArgs] as const
}

export function getCodereviewsCodeReviewArnRecommendationsQueryOptions<
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
  args: InferRequestType<(typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCodereviewsCodeReviewArnRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.codereviews[':CodeReviewArn'].Recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCodereviewsCodeReviewArnRecommendations<
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
  args: () => InferRequestType<
    (typeof client.codereviews)[':CodeReviewArn']['Recommendations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCodereviewsCodeReviewArnRecommendationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>>,
        TError,
        InferRequestType<typeof client.feedback.$put>,
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
    const mutationDefaults = getPutFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
