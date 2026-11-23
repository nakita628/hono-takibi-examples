import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostCreateConnectorProfileKey() {
  return ['create-connector-profile', '/create-connector-profile', 'POST'] as const
}

export function usePostCreateConnectorProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['create-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['create-connector-profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateConnectorProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['create-connector-profile']['$post']> },
      ) => parseResponse(client['create-connector-profile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateFlowKey() {
  return ['create-flow', '/create-flow', 'POST'] as const
}

export function usePostCreateFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['create-flow']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['create-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['create-flow']['$post']> }) =>
        parseResponse(client['create-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteConnectorProfileKey() {
  return ['delete-connector-profile', '/delete-connector-profile', 'POST'] as const
}

export function usePostDeleteConnectorProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['delete-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['delete-connector-profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteConnectorProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['delete-connector-profile']['$post']> },
      ) => parseResponse(client['delete-connector-profile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteFlowKey() {
  return ['delete-flow', '/delete-flow', 'POST'] as const
}

export function usePostDeleteFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['delete-flow']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['delete-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['delete-flow']['$post']> }) =>
        parseResponse(client['delete-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeConnectorKey() {
  return ['describe-connector', '/describe-connector', 'POST'] as const
}

export function usePostDescribeConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-connector']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-connector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['describe-connector']['$post']> },
      ) => parseResponse(client['describe-connector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeConnectorEntityKey() {
  return ['describe-connector-entity', '/describe-connector-entity', 'POST'] as const
}

export function usePostDescribeConnectorEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-connector-entity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-connector-entity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeConnectorEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['describe-connector-entity']['$post']> },
      ) => parseResponse(client['describe-connector-entity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeConnectorProfilesKey() {
  return ['describe-connector-profiles', '/describe-connector-profiles', 'POST'] as const
}

export function usePostDescribeConnectorProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-connector-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-connector-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeConnectorProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['describe-connector-profiles']['$post']> },
      ) => parseResponse(client['describe-connector-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeConnectorsKey() {
  return ['describe-connectors', '/describe-connectors', 'POST'] as const
}

export function usePostDescribeConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-connectors']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-connectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['describe-connectors']['$post']> },
      ) => parseResponse(client['describe-connectors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeFlowKey() {
  return ['describe-flow', '/describe-flow', 'POST'] as const
}

export function usePostDescribeFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['describe-flow']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['describe-flow']['$post']> },
      ) => parseResponse(client['describe-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeFlowExecutionRecordsKey() {
  return ['describe-flow-execution-records', '/describe-flow-execution-records', 'POST'] as const
}

export function usePostDescribeFlowExecutionRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['describe-flow-execution-records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['describe-flow-execution-records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeFlowExecutionRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['describe-flow-execution-records']['$post']> },
      ) => parseResponse(client['describe-flow-execution-records'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListConnectorEntitiesKey() {
  return ['list-connector-entities', '/list-connector-entities', 'POST'] as const
}

export function usePostListConnectorEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['list-connector-entities']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['list-connector-entities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListConnectorEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['list-connector-entities']['$post']> },
      ) => parseResponse(client['list-connector-entities'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListConnectorsKey() {
  return ['list-connectors', '/list-connectors', 'POST'] as const
}

export function usePostListConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-connectors']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['list-connectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['list-connectors']['$post']> },
      ) => parseResponse(client['list-connectors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListFlowsKey() {
  return ['list-flows', '/list-flows', 'POST'] as const
}

export function usePostListFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-flows']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['list-flows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['list-flows']['$post']> }) =>
        parseResponse(client['list-flows'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterConnectorKey() {
  return ['register-connector', '/register-connector', 'POST'] as const
}

export function usePostRegisterConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['register-connector']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['register-connector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['register-connector']['$post']> },
      ) => parseResponse(client['register-connector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartFlowKey() {
  return ['start-flow', '/start-flow', 'POST'] as const
}

export function usePostStartFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['start-flow']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['start-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['start-flow']['$post']> }) =>
        parseResponse(client['start-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStopFlowKey() {
  return ['stop-flow', '/stop-flow', 'POST'] as const
}

export function usePostStopFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stop-flow']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stop-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStopFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['stop-flow']['$post']> }) =>
        parseResponse(client['stop-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnregisterConnectorKey() {
  return ['unregister-connector', '/unregister-connector', 'POST'] as const
}

export function usePostUnregisterConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unregister-connector']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['unregister-connector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnregisterConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['unregister-connector']['$post']> },
      ) => parseResponse(client['unregister-connector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateConnectorProfileKey() {
  return ['update-connector-profile', '/update-connector-profile', 'POST'] as const
}

export function usePostUpdateConnectorProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-connector-profile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-connector-profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateConnectorProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['update-connector-profile']['$post']> },
      ) => parseResponse(client['update-connector-profile'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateConnectorRegistrationKey() {
  return ['update-connector-registration', '/update-connector-registration', 'POST'] as const
}

export function usePostUpdateConnectorRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['update-connector-registration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-connector-registration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateConnectorRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['update-connector-registration']['$post']> },
      ) => parseResponse(client['update-connector-registration'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateFlowKey() {
  return ['update-flow', '/update-flow', 'POST'] as const
}

export function usePostUpdateFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['update-flow']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['update-flow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['update-flow']['$post']> }) =>
        parseResponse(client['update-flow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
