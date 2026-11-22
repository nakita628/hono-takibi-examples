import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CanceljobKey() {
  return ['v1', '/v1/canceljob', 'POST'] as const
}

export function usePostV1Canceljob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.canceljob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.canceljob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CanceljobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.canceljob.$post> }) =>
        parseResponse(client.v1.canceljob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreatecomputeenvironmentKey() {
  return ['v1', '/v1/createcomputeenvironment', 'POST'] as const
}

export function usePostV1Createcomputeenvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.createcomputeenvironment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.createcomputeenvironment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreatecomputeenvironmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.createcomputeenvironment.$post> },
      ) => parseResponse(client.v1.createcomputeenvironment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreatejobqueueKey() {
  return ['v1', '/v1/createjobqueue', 'POST'] as const
}

export function usePostV1Createjobqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.createjobqueue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.createjobqueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreatejobqueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.createjobqueue.$post> }) =>
        parseResponse(client.v1.createjobqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreateschedulingpolicyKey() {
  return ['v1', '/v1/createschedulingpolicy', 'POST'] as const
}

export function usePostV1Createschedulingpolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.createschedulingpolicy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.createschedulingpolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreateschedulingpolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.createschedulingpolicy.$post> },
      ) => parseResponse(client.v1.createschedulingpolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeletecomputeenvironmentKey() {
  return ['v1', '/v1/deletecomputeenvironment', 'POST'] as const
}

export function usePostV1Deletecomputeenvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deletecomputeenvironment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.deletecomputeenvironment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeletecomputeenvironmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.deletecomputeenvironment.$post> },
      ) => parseResponse(client.v1.deletecomputeenvironment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeletejobqueueKey() {
  return ['v1', '/v1/deletejobqueue', 'POST'] as const
}

export function usePostV1Deletejobqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deletejobqueue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.deletejobqueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeletejobqueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.deletejobqueue.$post> }) =>
        parseResponse(client.v1.deletejobqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeleteschedulingpolicyKey() {
  return ['v1', '/v1/deleteschedulingpolicy', 'POST'] as const
}

export function usePostV1Deleteschedulingpolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deleteschedulingpolicy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.deleteschedulingpolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeleteschedulingpolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.deleteschedulingpolicy.$post> },
      ) => parseResponse(client.v1.deleteschedulingpolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeregisterjobdefinitionKey() {
  return ['v1', '/v1/deregisterjobdefinition', 'POST'] as const
}

export function usePostV1Deregisterjobdefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.deregisterjobdefinition.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.deregisterjobdefinition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeregisterjobdefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.deregisterjobdefinition.$post> },
      ) => parseResponse(client.v1.deregisterjobdefinition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DescribecomputeenvironmentsKey() {
  return ['v1', '/v1/describecomputeenvironments', 'POST'] as const
}

export function usePostV1Describecomputeenvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.describecomputeenvironments.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.describecomputeenvironments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DescribecomputeenvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.describecomputeenvironments.$post> },
      ) => parseResponse(client.v1.describecomputeenvironments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DescribejobdefinitionsKey() {
  return ['v1', '/v1/describejobdefinitions', 'POST'] as const
}

export function usePostV1Describejobdefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobdefinitions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.describejobdefinitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DescribejobdefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.describejobdefinitions.$post> },
      ) => parseResponse(client.v1.describejobdefinitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DescribejobqueuesKey() {
  return ['v1', '/v1/describejobqueues', 'POST'] as const
}

export function usePostV1Describejobqueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobqueues.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.describejobqueues.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DescribejobqueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.describejobqueues.$post> },
      ) => parseResponse(client.v1.describejobqueues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DescribejobsKey() {
  return ['v1', '/v1/describejobs', 'POST'] as const
}

export function usePostV1Describejobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.describejobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.describejobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DescribejobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.describejobs.$post> }) =>
        parseResponse(client.v1.describejobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DescribeschedulingpoliciesKey() {
  return ['v1', '/v1/describeschedulingpolicies', 'POST'] as const
}

export function usePostV1Describeschedulingpolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.describeschedulingpolicies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.describeschedulingpolicies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DescribeschedulingpoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.describeschedulingpolicies.$post> },
      ) => parseResponse(client.v1.describeschedulingpolicies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ListjobsKey() {
  return ['v1', '/v1/listjobs', 'POST'] as const
}

export function usePostV1Listjobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.listjobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.listjobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ListjobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.listjobs.$post> }) =>
        parseResponse(client.v1.listjobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ListschedulingpoliciesKey() {
  return ['v1', '/v1/listschedulingpolicies', 'POST'] as const
}

export function usePostV1Listschedulingpolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.listschedulingpolicies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.listschedulingpolicies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ListschedulingpoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.listschedulingpolicies.$post> },
      ) => parseResponse(client.v1.listschedulingpolicies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TagsResourceArnKey(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function useGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TagsResourceArnKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function usePostV1TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.v1.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegisterjobdefinitionKey() {
  return ['v1', '/v1/registerjobdefinition', 'POST'] as const
}

export function usePostV1Registerjobdefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.registerjobdefinition.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registerjobdefinition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegisterjobdefinitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registerjobdefinition.$post> },
      ) => parseResponse(client.v1.registerjobdefinition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubmitjobKey() {
  return ['v1', '/v1/submitjob', 'POST'] as const
}

export function usePostV1Submitjob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.submitjob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.submitjob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubmitjobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.submitjob.$post> }) =>
        parseResponse(client.v1.submitjob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminatejobKey() {
  return ['v1', '/v1/terminatejob', 'POST'] as const
}

export function usePostV1Terminatejob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminatejob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.terminatejob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminatejobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.terminatejob.$post> }) =>
        parseResponse(client.v1.terminatejob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsResourceArnTagKeysKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteV1TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UpdatecomputeenvironmentKey() {
  return ['v1', '/v1/updatecomputeenvironment', 'POST'] as const
}

export function usePostV1Updatecomputeenvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.updatecomputeenvironment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.updatecomputeenvironment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UpdatecomputeenvironmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.updatecomputeenvironment.$post> },
      ) => parseResponse(client.v1.updatecomputeenvironment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UpdatejobqueueKey() {
  return ['v1', '/v1/updatejobqueue', 'POST'] as const
}

export function usePostV1Updatejobqueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.updatejobqueue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.updatejobqueue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UpdatejobqueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.updatejobqueue.$post> }) =>
        parseResponse(client.v1.updatejobqueue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UpdateschedulingpolicyKey() {
  return ['v1', '/v1/updateschedulingpolicy', 'POST'] as const
}

export function usePostV1Updateschedulingpolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.updateschedulingpolicy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.updateschedulingpolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UpdateschedulingpolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.updateschedulingpolicy.$post> },
      ) => parseResponse(client.v1.updateschedulingpolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
