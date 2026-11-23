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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CanceljobMutationKey() {
  return ['v1', '/v1/canceljob', 'POST'] as const
}

export function getPostV1CanceljobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.canceljob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.canceljob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CanceljobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.canceljob.$post>) {
      return parseResponse(client.v1.canceljob.$post(args, options))
    },
  })
}

export function usePostV1Canceljob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.canceljob.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.canceljob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CanceljobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1CreatecomputeenvironmentMutationKey() {
  return ['v1', '/v1/createcomputeenvironment', 'POST'] as const
}

export function getPostV1CreatecomputeenvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.createcomputeenvironment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.createcomputeenvironment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreatecomputeenvironmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.createcomputeenvironment.$post>) {
      return parseResponse(client.v1.createcomputeenvironment.$post(args, options))
    },
  })
}

export function usePostV1Createcomputeenvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.createcomputeenvironment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.createcomputeenvironment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreatecomputeenvironmentMutationOptions<
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

export function getPostV1CreatejobqueueMutationKey() {
  return ['v1', '/v1/createjobqueue', 'POST'] as const
}

export function getPostV1CreatejobqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.createjobqueue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.createjobqueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreatejobqueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.createjobqueue.$post>) {
      return parseResponse(client.v1.createjobqueue.$post(args, options))
    },
  })
}

export function usePostV1Createjobqueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.createjobqueue.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.createjobqueue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreatejobqueueMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CreateschedulingpolicyMutationKey() {
  return ['v1', '/v1/createschedulingpolicy', 'POST'] as const
}

export function getPostV1CreateschedulingpolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.createschedulingpolicy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.createschedulingpolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CreateschedulingpolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.createschedulingpolicy.$post>) {
      return parseResponse(client.v1.createschedulingpolicy.$post(args, options))
    },
  })
}

export function usePostV1Createschedulingpolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.createschedulingpolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.createschedulingpolicy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CreateschedulingpolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DeletecomputeenvironmentMutationKey() {
  return ['v1', '/v1/deletecomputeenvironment', 'POST'] as const
}

export function getPostV1DeletecomputeenvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deletecomputeenvironment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.deletecomputeenvironment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeletecomputeenvironmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.deletecomputeenvironment.$post>) {
      return parseResponse(client.v1.deletecomputeenvironment.$post(args, options))
    },
  })
}

export function usePostV1Deletecomputeenvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.deletecomputeenvironment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.deletecomputeenvironment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeletecomputeenvironmentMutationOptions<
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

export function getPostV1DeletejobqueueMutationKey() {
  return ['v1', '/v1/deletejobqueue', 'POST'] as const
}

export function getPostV1DeletejobqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deletejobqueue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.deletejobqueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeletejobqueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.deletejobqueue.$post>) {
      return parseResponse(client.v1.deletejobqueue.$post(args, options))
    },
  })
}

export function usePostV1Deletejobqueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.deletejobqueue.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.deletejobqueue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeletejobqueueMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DeleteschedulingpolicyMutationKey() {
  return ['v1', '/v1/deleteschedulingpolicy', 'POST'] as const
}

export function getPostV1DeleteschedulingpolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deleteschedulingpolicy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.deleteschedulingpolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeleteschedulingpolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.deleteschedulingpolicy.$post>) {
      return parseResponse(client.v1.deleteschedulingpolicy.$post(args, options))
    },
  })
}

export function usePostV1Deleteschedulingpolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.deleteschedulingpolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.deleteschedulingpolicy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeleteschedulingpolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DeregisterjobdefinitionMutationKey() {
  return ['v1', '/v1/deregisterjobdefinition', 'POST'] as const
}

export function getPostV1DeregisterjobdefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deregisterjobdefinition.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.deregisterjobdefinition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeregisterjobdefinitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.deregisterjobdefinition.$post>) {
      return parseResponse(client.v1.deregisterjobdefinition.$post(args, options))
    },
  })
}

export function usePostV1Deregisterjobdefinition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.deregisterjobdefinition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.deregisterjobdefinition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeregisterjobdefinitionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DescribecomputeenvironmentsMutationKey() {
  return ['v1', '/v1/describecomputeenvironments', 'POST'] as const
}

export function getPostV1DescribecomputeenvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.describecomputeenvironments.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.describecomputeenvironments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DescribecomputeenvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.describecomputeenvironments.$post>) {
      return parseResponse(client.v1.describecomputeenvironments.$post(args, options))
    },
  })
}

export function usePostV1Describecomputeenvironments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.describecomputeenvironments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.describecomputeenvironments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DescribecomputeenvironmentsMutationOptions<
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

export function getPostV1DescribejobdefinitionsMutationKey() {
  return ['v1', '/v1/describejobdefinitions', 'POST'] as const
}

export function getPostV1DescribejobdefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobdefinitions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.describejobdefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DescribejobdefinitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.describejobdefinitions.$post>) {
      return parseResponse(client.v1.describejobdefinitions.$post(args, options))
    },
  })
}

export function usePostV1Describejobdefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobdefinitions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.describejobdefinitions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DescribejobdefinitionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DescribejobqueuesMutationKey() {
  return ['v1', '/v1/describejobqueues', 'POST'] as const
}

export function getPostV1DescribejobqueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobqueues.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.describejobqueues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DescribejobqueuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.describejobqueues.$post>) {
      return parseResponse(client.v1.describejobqueues.$post(args, options))
    },
  })
}

export function usePostV1Describejobqueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobqueues.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.describejobqueues.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DescribejobqueuesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DescribejobsMutationKey() {
  return ['v1', '/v1/describejobs', 'POST'] as const
}

export function getPostV1DescribejobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.describejobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DescribejobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.describejobs.$post>) {
      return parseResponse(client.v1.describejobs.$post(args, options))
    },
  })
}

export function usePostV1Describejobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.describejobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DescribejobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DescribeschedulingpoliciesMutationKey() {
  return ['v1', '/v1/describeschedulingpolicies', 'POST'] as const
}

export function getPostV1DescribeschedulingpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describeschedulingpolicies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.describeschedulingpolicies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DescribeschedulingpoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.describeschedulingpolicies.$post>) {
      return parseResponse(client.v1.describeschedulingpolicies.$post(args, options))
    },
  })
}

export function usePostV1Describeschedulingpolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.describeschedulingpolicies.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.describeschedulingpolicies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DescribeschedulingpoliciesMutationOptions<
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

export function getPostV1ListjobsMutationKey() {
  return ['v1', '/v1/listjobs', 'POST'] as const
}

export function getPostV1ListjobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listjobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.listjobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ListjobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.listjobs.$post>) {
      return parseResponse(client.v1.listjobs.$post(args, options))
    },
  })
}

export function usePostV1Listjobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listjobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.listjobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ListjobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ListschedulingpoliciesMutationKey() {
  return ['v1', '/v1/listschedulingpolicies', 'POST'] as const
}

export function getPostV1ListschedulingpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.listschedulingpolicies.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.listschedulingpolicies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ListschedulingpoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.listschedulingpolicies.$post>) {
      return parseResponse(client.v1.listschedulingpolicies.$post(args, options))
    },
  })
}

export function usePostV1Listschedulingpolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.listschedulingpolicies.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.listschedulingpolicies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ListschedulingpoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getV1TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >({
    queryKey: getV1TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags[':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1TagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1TagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1RegisterjobdefinitionMutationKey() {
  return ['v1', '/v1/registerjobdefinition', 'POST'] as const
}

export function getPostV1RegisterjobdefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.registerjobdefinition.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.registerjobdefinition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RegisterjobdefinitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.registerjobdefinition.$post>) {
      return parseResponse(client.v1.registerjobdefinition.$post(args, options))
    },
  })
}

export function usePostV1Registerjobdefinition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.registerjobdefinition.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.registerjobdefinition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1RegisterjobdefinitionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SubmitjobMutationKey() {
  return ['v1', '/v1/submitjob', 'POST'] as const
}

export function getPostV1SubmitjobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.submitjob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.submitjob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubmitjobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.submitjob.$post>) {
      return parseResponse(client.v1.submitjob.$post(args, options))
    },
  })
}

export function usePostV1Submitjob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.submitjob.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.submitjob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SubmitjobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1TerminatejobMutationKey() {
  return ['v1', '/v1/terminatejob', 'POST'] as const
}

export function getPostV1TerminatejobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminatejob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.terminatejob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TerminatejobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.terminatejob.$post>) {
      return parseResponse(client.v1.terminatejob.$post(args, options))
    },
  })
}

export function usePostV1Terminatejob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminatejob.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.terminatejob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TerminatejobMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getPostV1UpdatecomputeenvironmentMutationKey() {
  return ['v1', '/v1/updatecomputeenvironment', 'POST'] as const
}

export function getPostV1UpdatecomputeenvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.updatecomputeenvironment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.updatecomputeenvironment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UpdatecomputeenvironmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.updatecomputeenvironment.$post>) {
      return parseResponse(client.v1.updatecomputeenvironment.$post(args, options))
    },
  })
}

export function usePostV1Updatecomputeenvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.updatecomputeenvironment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.updatecomputeenvironment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UpdatecomputeenvironmentMutationOptions<
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

export function getPostV1UpdatejobqueueMutationKey() {
  return ['v1', '/v1/updatejobqueue', 'POST'] as const
}

export function getPostV1UpdatejobqueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.updatejobqueue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.updatejobqueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UpdatejobqueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.updatejobqueue.$post>) {
      return parseResponse(client.v1.updatejobqueue.$post(args, options))
    },
  })
}

export function usePostV1Updatejobqueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.updatejobqueue.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.updatejobqueue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UpdatejobqueueMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1UpdateschedulingpolicyMutationKey() {
  return ['v1', '/v1/updateschedulingpolicy', 'POST'] as const
}

export function getPostV1UpdateschedulingpolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.updateschedulingpolicy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.updateschedulingpolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UpdateschedulingpolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.updateschedulingpolicy.$post>) {
      return parseResponse(client.v1.updateschedulingpolicy.$post(args, options))
    },
  })
}

export function usePostV1Updateschedulingpolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.updateschedulingpolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.updateschedulingpolicy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1UpdateschedulingpolicyMutationOptions<TError, TOnMutateResult>(
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
