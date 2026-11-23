import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateConnectorProfileKey() {
  return ['create-connector-profile'] as const
}

export function getCreateFlowKey() {
  return ['create-flow'] as const
}

export function getDeleteConnectorProfileKey() {
  return ['delete-connector-profile'] as const
}

export function getDeleteFlowKey() {
  return ['delete-flow'] as const
}

export function getDescribeConnectorKey() {
  return ['describe-connector'] as const
}

export function getDescribeConnectorEntityKey() {
  return ['describe-connector-entity'] as const
}

export function getDescribeConnectorProfilesKey() {
  return ['describe-connector-profiles'] as const
}

export function getDescribeConnectorsKey() {
  return ['describe-connectors'] as const
}

export function getDescribeFlowKey() {
  return ['describe-flow'] as const
}

export function getDescribeFlowExecutionRecordsKey() {
  return ['describe-flow-execution-records'] as const
}

export function getListConnectorEntitiesKey() {
  return ['list-connector-entities'] as const
}

export function getListConnectorsKey() {
  return ['list-connectors'] as const
}

export function getListFlowsKey() {
  return ['list-flows'] as const
}

export function getRegisterConnectorKey() {
  return ['register-connector'] as const
}

export function getStartFlowKey() {
  return ['start-flow'] as const
}

export function getStopFlowKey() {
  return ['stop-flow'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUnregisterConnectorKey() {
  return ['unregister-connector'] as const
}

export function getUpdateConnectorProfileKey() {
  return ['update-connector-profile'] as const
}

export function getUpdateConnectorRegistrationKey() {
  return ['update-connector-registration'] as const
}

export function getUpdateFlowKey() {
  return ['update-flow'] as const
}

export function getPostCreateConnectorProfileMutationKey() {
  return ['create-connector-profile', '/create-connector-profile', 'POST'] as const
}

export function getPostCreateConnectorProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['create-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['create-connector-profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateConnectorProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['create-connector-profile']['$post']>) {
      return parseResponse(client['create-connector-profile'].$post(args, options))
    },
  })
}

export function usePostCreateConnectorProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['create-connector-profile']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['create-connector-profile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateConnectorProfileMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateFlowMutationKey() {
  return ['create-flow', '/create-flow', 'POST'] as const
}

export function getPostCreateFlowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['create-flow']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['create-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['create-flow']['$post']>) {
      return parseResponse(client['create-flow'].$post(args, options))
    },
  })
}

export function usePostCreateFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['create-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['create-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateFlowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteConnectorProfileMutationKey() {
  return ['delete-connector-profile', '/delete-connector-profile', 'POST'] as const
}

export function getPostDeleteConnectorProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['delete-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['delete-connector-profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteConnectorProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['delete-connector-profile']['$post']>) {
      return parseResponse(client['delete-connector-profile'].$post(args, options))
    },
  })
}

export function usePostDeleteConnectorProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['delete-connector-profile']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['delete-connector-profile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteConnectorProfileMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteFlowMutationKey() {
  return ['delete-flow', '/delete-flow', 'POST'] as const
}

export function getPostDeleteFlowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-flow']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['delete-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['delete-flow']['$post']>) {
      return parseResponse(client['delete-flow'].$post(args, options))
    },
  })
}

export function usePostDeleteFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['delete-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteFlowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeConnectorMutationKey() {
  return ['describe-connector', '/describe-connector', 'POST'] as const
}

export function getPostDescribeConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-connector']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-connector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeConnectorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['describe-connector']['$post']>) {
      return parseResponse(client['describe-connector'].$post(args, options))
    },
  })
}

export function usePostDescribeConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['describe-connector']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-connector']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeConnectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeConnectorEntityMutationKey() {
  return ['describe-connector-entity', '/describe-connector-entity', 'POST'] as const
}

export function getPostDescribeConnectorEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-connector-entity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-connector-entity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeConnectorEntityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['describe-connector-entity']['$post']>,
    ) {
      return parseResponse(client['describe-connector-entity'].$post(args, options))
    },
  })
}

export function usePostDescribeConnectorEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['describe-connector-entity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-connector-entity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeConnectorEntityMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeConnectorProfilesMutationKey() {
  return ['describe-connector-profiles', '/describe-connector-profiles', 'POST'] as const
}

export function getPostDescribeConnectorProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-connector-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-connector-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeConnectorProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['describe-connector-profiles']['$post']>,
    ) {
      return parseResponse(client['describe-connector-profiles'].$post(args, options))
    },
  })
}

export function usePostDescribeConnectorProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['describe-connector-profiles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-connector-profiles']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeConnectorProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeConnectorsMutationKey() {
  return ['describe-connectors', '/describe-connectors', 'POST'] as const
}

export function getPostDescribeConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-connectors']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-connectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['describe-connectors']['$post']>) {
      return parseResponse(client['describe-connectors'].$post(args, options))
    },
  })
}

export function usePostDescribeConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['describe-connectors']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-connectors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeFlowMutationKey() {
  return ['describe-flow', '/describe-flow', 'POST'] as const
}

export function getPostDescribeFlowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-flow']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['describe-flow']['$post']>) {
      return parseResponse(client['describe-flow'].$post(args, options))
    },
  })
}

export function usePostDescribeFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeFlowMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeFlowExecutionRecordsMutationKey() {
  return ['describe-flow-execution-records', '/describe-flow-execution-records', 'POST'] as const
}

export function getPostDescribeFlowExecutionRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-flow-execution-records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['describe-flow-execution-records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeFlowExecutionRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['describe-flow-execution-records']['$post']>,
    ) {
      return parseResponse(client['describe-flow-execution-records'].$post(args, options))
    },
  })
}

export function usePostDescribeFlowExecutionRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['describe-flow-execution-records']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['describe-flow-execution-records']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeFlowExecutionRecordsMutationOptions<
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

export function getPostListConnectorEntitiesMutationKey() {
  return ['list-connector-entities', '/list-connector-entities', 'POST'] as const
}

export function getPostListConnectorEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['list-connector-entities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['list-connector-entities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListConnectorEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['list-connector-entities']['$post']>) {
      return parseResponse(client['list-connector-entities'].$post(args, options))
    },
  })
}

export function usePostListConnectorEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['list-connector-entities']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['list-connector-entities']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListConnectorEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListConnectorsMutationKey() {
  return ['list-connectors', '/list-connectors', 'POST'] as const
}

export function getPostListConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-connectors']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['list-connectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['list-connectors']['$post']>) {
      return parseResponse(client['list-connectors'].$post(args, options))
    },
  })
}

export function usePostListConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['list-connectors']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['list-connectors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListFlowsMutationKey() {
  return ['list-flows', '/list-flows', 'POST'] as const
}

export function getPostListFlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-flows']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['list-flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListFlowsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['list-flows']['$post']>) {
      return parseResponse(client['list-flows'].$post(args, options))
    },
  })
}

export function usePostListFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['list-flows']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['list-flows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListFlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function getPostRegisterConnectorMutationKey() {
  return ['register-connector', '/register-connector', 'POST'] as const
}

export function getPostRegisterConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['register-connector']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['register-connector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterConnectorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['register-connector']['$post']>) {
      return parseResponse(client['register-connector'].$post(args, options))
    },
  })
}

export function usePostRegisterConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['register-connector']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['register-connector']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterConnectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostStartFlowMutationKey() {
  return ['start-flow', '/start-flow', 'POST'] as const
}

export function getPostStartFlowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['start-flow']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['start-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStartFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['start-flow']['$post']>) {
      return parseResponse(client['start-flow'].$post(args, options))
    },
  })
}

export function usePostStartFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['start-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['start-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStartFlowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStopFlowMutationKey() {
  return ['stop-flow', '/stop-flow', 'POST'] as const
}

export function getPostStopFlowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stop-flow']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['stop-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStopFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['stop-flow']['$post']>) {
      return parseResponse(client['stop-flow'].$post(args, options))
    },
  })
}

export function usePostStopFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stop-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['stop-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStopFlowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnregisterConnectorMutationKey() {
  return ['unregister-connector', '/unregister-connector', 'POST'] as const
}

export function getPostUnregisterConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unregister-connector']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['unregister-connector']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUnregisterConnectorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['unregister-connector']['$post']>) {
      return parseResponse(client['unregister-connector'].$post(args, options))
    },
  })
}

export function usePostUnregisterConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['unregister-connector']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['unregister-connector']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnregisterConnectorMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateConnectorProfileMutationKey() {
  return ['update-connector-profile', '/update-connector-profile', 'POST'] as const
}

export function getPostUpdateConnectorProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['update-connector-profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateConnectorProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update-connector-profile']['$post']>) {
      return parseResponse(client['update-connector-profile'].$post(args, options))
    },
  })
}

export function usePostUpdateConnectorProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['update-connector-profile']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['update-connector-profile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateConnectorProfileMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateConnectorRegistrationMutationKey() {
  return ['update-connector-registration', '/update-connector-registration', 'POST'] as const
}

export function getPostUpdateConnectorRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-connector-registration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['update-connector-registration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateConnectorRegistrationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['update-connector-registration']['$post']>,
    ) {
      return parseResponse(client['update-connector-registration'].$post(args, options))
    },
  })
}

export function usePostUpdateConnectorRegistration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['update-connector-registration']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['update-connector-registration']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateConnectorRegistrationMutationOptions<
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

export function getPostUpdateFlowMutationKey() {
  return ['update-flow', '/update-flow', 'POST'] as const
}

export function getPostUpdateFlowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['update-flow']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['update-flow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateFlowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['update-flow']['$post']>) {
      return parseResponse(client['update-flow'].$post(args, options))
    },
  })
}

export function usePostUpdateFlow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['update-flow']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['update-flow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateFlowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
