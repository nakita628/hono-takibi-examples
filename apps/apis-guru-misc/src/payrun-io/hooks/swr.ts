import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEmployerKey() {
  return ['Employer'] as const
}

export function getEmployersKey() {
  return ['Employers'] as const
}

export function getHealthcheckKey() {
  return ['Healthcheck'] as const
}

export function getJobsKey() {
  return ['Jobs'] as const
}

export function getJournalInstructionKey() {
  return ['JournalInstruction'] as const
}

export function getJournalInstructionsKey() {
  return ['JournalInstructions'] as const
}

export function getPermissionKey() {
  return ['Permission'] as const
}

export function getPermissionsKey() {
  return ['Permissions'] as const
}

export function getQueryKey() {
  return ['Query'] as const
}

export function getReferenceDataKey() {
  return ['ReferenceData'] as const
}

export function getReportKey() {
  return ['Report'] as const
}

export function getReportsKey() {
  return ['Reports'] as const
}

export function getSchemasKey() {
  return ['Schemas'] as const
}

export function getSecretKey() {
  return ['Secret'] as const
}

export function getSecretsKey() {
  return ['Secrets'] as const
}

export function getTemplateKey() {
  return ['Template'] as const
}

export function getTemplatesKey() {
  return ['Templates'] as const
}

export function getTransformKey() {
  return ['Transform'] as const
}

export function getTransformsKey() {
  return ['Transforms'] as const
}

export function getUserKey() {
  return ['User'] as const
}

export function getUsersKey() {
  return ['Users'] as const
}

export function getGetEmployerEmployerIdKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId', keyArgs] as const
}

export function useGetEmployerEmployerId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
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
        ? getGetEmployerEmployerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
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
        ? getGetEmployerEmployerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdKey() {
  return ['Employer', '/Employer/:EmployerId', 'PUT'] as const
}

export function usePutEmployerEmployerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['$put']> },
      ) => parseResponse(client.Employer[':EmployerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdKey() {
  return ['Employer', '/Employer/:EmployerId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']> },
      ) => parseResponse(client.Employer[':EmployerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdKey() {
  return ['Employer', '/Employer/:EmployerId', 'PATCH'] as const
}

export function usePatchEmployerEmployerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']> },
      ) => parseResponse(client.Employer[':EmployerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypeCisLineTypeIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', keyArgs] as const
}

export function useGetEmployerEmployerIdCisLineTypeCisLineTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypeCisLineTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', 'PUT'] as const
}

export function usePutEmployerEmployerIdCisLineTypeCisLineTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdCisLineTypeCisLineTypeIdKey()
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
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdCisLineTypeCisLineTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdKey()
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
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdCisLineTypeCisLineTypeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypeCisLineTypeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypeCisLineTypeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes', keyArgs] as const
}

export function useGetEmployerEmployerIdCisLineTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
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
        ? getGetEmployerEmployerIdCisLineTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisLineTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
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
        ? getGetEmployerEmployerIdCisLineTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisLineTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdCisLineTypesKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineTypes', 'POST'] as const
}

export function usePostEmployerEmployerIdCisLineTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdCisLineTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].CisLineTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdCisLineTypesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].CisLineTypes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdCisLineTypesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].CisLineTypes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisLineTypesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdCisLineTypesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdCisLineTypesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisLineTypes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisLineTypesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdCisLineTypesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisLineTypes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisTransactionCisTransactionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisTransaction/:CisTransactionId', keyArgs] as const
}

export function useGetEmployerEmployerIdCisTransactionCisTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
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
        ? getGetEmployerEmployerIdCisTransactionCisTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
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
          client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisTransactionCisTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
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
        ? getGetEmployerEmployerIdCisTransactionCisTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
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
          client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdCisTransactionCisTransactionIdKey() {
  return ['Employer', '/Employer/:EmployerId/CisTransaction/:CisTransactionId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdCisTransactionCisTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdCisTransactionCisTransactionIdKey()
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
            (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdCisTransactionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisTransactions', keyArgs] as const
}

export function useGetEmployerEmployerIdCisTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
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
        ? getGetEmployerEmployerIdCisTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdCisTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
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
        ? getGetEmployerEmployerIdCisTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].CisTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdDpsMessageDpsMessageIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', keyArgs] as const
}

export function useGetEmployerEmployerIdDpsMessageDpsMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
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
        ? getGetEmployerEmployerIdDpsMessageDpsMessageIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
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
          client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdDpsMessageDpsMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
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
        ? getGetEmployerEmployerIdDpsMessageDpsMessageIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
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
          client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdDpsMessageDpsMessageIdKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'PUT'] as const
}

export function usePutEmployerEmployerIdDpsMessageDpsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdDpsMessageDpsMessageIdKey()
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
            (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdDpsMessageDpsMessageIdKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdDpsMessageDpsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdDpsMessageDpsMessageIdKey()
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
            (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdDpsMessageDpsMessageIdKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdDpsMessageDpsMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdDpsMessageDpsMessageIdKey()
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
            (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdDpsMessagesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/DpsMessages', keyArgs] as const
}

export function useGetEmployerEmployerIdDpsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
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
        ? getGetEmployerEmployerIdDpsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].DpsMessages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdDpsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
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
        ? getGetEmployerEmployerIdDpsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].DpsMessages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdDpsMessagesKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessages', 'POST'] as const
}

export function usePostEmployerEmployerIdDpsMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdDpsMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].DpsMessages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'PUT'] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdEmployeeEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdEmployeeEmployeeIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[
            ':AEAssessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[
            ':AEAssessmentId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[
            ':AEAssessmentId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[
            ':AEAssessmentId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessments', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdAEAssessments<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdAEAssessments<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessments', 'POST'] as const
}

export function usePostEmployerEmployerIdEmployeeEmployeeIdAEAssessments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdCommentariesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Commentaries', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdCommentaries<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdCommentariesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentaries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdCommentaries<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdCommentariesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentaries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Commentary/:CommentaryId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentary[':CommentaryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentary[':CommentaryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdJournalLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/JournalLines', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdJournalLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].JournalLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdJournalLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].JournalLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'PATCH',
  ] as const
}

export function usePatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tag[':TagId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tag[':TagId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
            ':PayInstructionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions', 'POST'] as const
}

export function usePostEmployerEmployerIdEmployeeEmployeeIdPayInstructions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
            ':TagId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
            ':TagId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayLines', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdPayRunsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayRuns', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdPayRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayRunsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayRuns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdPayRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdPayRunsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].PayRuns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[
            ':RevisionNumber'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber/Summary',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[
            ':RevisionNumber'
          ].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[
            ':RevisionNumber'
          ].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Revisions', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revisions/Summary',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdRevisionsSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdRevisionsSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId', 'PUT'] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdSecretsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secrets', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdSecrets<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSecretsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdSecrets<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSecretsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdSecretsKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secrets', 'POST'] as const
}

export function usePostEmployerEmployerIdEmployeeEmployeeIdSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdEmployeeEmployeeIdSecretsKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdEmployeeEmployeeIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags[':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags[':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate/Summary',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
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
        ? getGetEmployerEmployerIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployees<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
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
        ? getGetEmployerEmployerIdEmployeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Employees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdEmployeesKey() {
  return ['Employer', '/Employer/:EmployerId/Employees', 'POST'] as const
}

export function usePostEmployerEmployerIdEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']> },
      ) => parseResponse(client.Employer[':EmployerId'].Employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesSummaryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeesSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
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
        ? getGetEmployerEmployerIdEmployeesSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Employees.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeesSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
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
        ? getGetEmployerEmployerIdEmployeesSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Employees.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employees.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdEmployeesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].Employees.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdEmployeesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Employees.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdEmployeesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Employees.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employees[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdEmployeesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Employees[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEmployeesEffectiveDateSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/:EffectiveDate/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdEmployeesEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeesEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employees[':EffectiveDate'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEmployeesEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEmployeesEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'].Employees[':EffectiveDate'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'PUT'] as const
}

export function usePutEmployerEmployerIdHolidaySchemeHolidaySchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdHolidaySchemeHolidaySchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
            ':RevisionNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
            ':RevisionNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
            ':RevisionNumber'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revisions',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][
            ':EffectiveDate'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
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
        ? getGetEmployerEmployerIdHolidaySchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
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
        ? getGetEmployerEmployerIdHolidaySchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdHolidaySchemesKey() {
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes', 'POST'] as const
}

export function usePostEmployerEmployerIdHolidaySchemes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdHolidaySchemesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].HolidaySchemes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].HolidaySchemes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdHolidaySchemesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].HolidaySchemes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdHolidaySchemesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].HolidaySchemes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdHolidaySchemesEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdHolidaySchemesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidaySchemes[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdHolidaySchemesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdHolidaySchemesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].HolidaySchemes[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalInstructionJournalInstructionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdJournalInstructionJournalInstructionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
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
        ? getGetEmployerEmployerIdJournalInstructionJournalInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
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
          client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalInstructionJournalInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
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
        ? getGetEmployerEmployerIdJournalInstructionJournalInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
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
          client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdJournalInstructionJournalInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdJournalInstructionJournalInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdJournalInstructionJournalInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdJournalInstructionJournalInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalInstructionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalInstructions', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
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
        ? getGetEmployerEmployerIdJournalInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
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
        ? getGetEmployerEmployerIdJournalInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdJournalInstructionsKey() {
  return ['Employer', '/Employer/:EmployerId/JournalInstructions', 'POST'] as const
}

export function usePostEmployerEmployerIdJournalInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdJournalInstructionsKey()
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
            (typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']
          >
        },
      ) =>
        parseResponse(client.Employer[':EmployerId'].JournalInstructions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLineJournalLineIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalLineJournalLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLineJournalLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdJournalLineJournalLineIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLineJournalLineIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdJournalLineJournalLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLineJournalLineIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalLineJournalLineIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLineJournalLineIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdJournalLineJournalLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLinesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalLines<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
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
        ? getGetEmployerEmployerIdJournalLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLines<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
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
        ? getGetEmployerEmployerIdJournalLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLinesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalLinesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdJournalLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].JournalLines.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLinesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdJournalLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].JournalLines.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdJournalLinesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdJournalLinesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdJournalLinesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalLines.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdJournalLinesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdJournalLinesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].JournalLines.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdNominalCodeNominalCodeIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', keyArgs] as const
}

export function useGetEmployerEmployerIdNominalCodeNominalCodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
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
        ? getGetEmployerEmployerIdNominalCodeNominalCodeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
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
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdNominalCodeNominalCodeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
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
        ? getGetEmployerEmployerIdNominalCodeNominalCodeIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
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
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdNominalCodeNominalCodeIdKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', 'PUT'] as const
}

export function usePutEmployerEmployerIdNominalCodeNominalCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdNominalCodeNominalCodeIdKey()
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
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdNominalCodeNominalCodeIdKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdNominalCodeNominalCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdNominalCodeNominalCodeIdKey()
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
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdNominalCodeNominalCodeIdPayCodesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId/PayCodes', keyArgs] as const
}

export function useGetEmployerEmployerIdNominalCodeNominalCodeIdPayCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
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
        ? getGetEmployerEmployerIdNominalCodeNominalCodeIdPayCodesKey(args)
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
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
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
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].PayCodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdNominalCodeNominalCodeIdPayCodes<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
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
        ? getGetEmployerEmployerIdNominalCodeNominalCodeIdPayCodesKey(args)
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
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
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
          client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].PayCodes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdNominalCodesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCodes', keyArgs] as const
}

export function useGetEmployerEmployerIdNominalCodes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
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
        ? getGetEmployerEmployerIdNominalCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].NominalCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdNominalCodes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
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
        ? getGetEmployerEmployerIdNominalCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].NominalCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdNominalCodesKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCodes', 'POST'] as const
}

export function usePostEmployerEmployerIdNominalCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdNominalCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].NominalCodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPayCodePayCodeIdKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'PUT'] as const
}

export function usePutEmployerEmployerIdPayCodePayCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdPayCodePayCodeIdKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPayCodePayCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPayCodePayCodeIdKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdPayCodePayCodeIdKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdPayCodePayCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdPayCodePayCodeIdKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdRevisionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Revisions', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdPayCodePayCodeIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPayCodePayCodeIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodePayCodeIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodePayCodeIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodePayCodeIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPayCodePayCodeIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/:EffectiveDate', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
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
        ? getGetEmployerEmployerIdPayCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].PayCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodes<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
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
        ? getGetEmployerEmployerIdPayCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].PayCodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdPayCodesKey() {
  return ['Employer', '/Employer/:EmployerId/PayCodes', 'POST'] as const
}

export function usePostEmployerEmployerIdPayCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdPayCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']> },
      ) => parseResponse(client.Employer[':EmployerId'].PayCodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPayCodesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PayCodes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPayCodesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PayCodes.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
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
        ? getGetEmployerEmployerIdPayCodesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PayCodes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
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
        ? getGetEmployerEmployerIdPayCodesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PayCodes.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPayCodesEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdPayCodesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPayCodesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PayCodes[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPayCodesEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPayCodesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PayCodes[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', 'PUT'] as const
}

export function usePutEmployerEmployerIdPaySchedulePayScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdPaySchedulePayScheduleIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPaySchedulePayScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPaySchedulePayScheduleIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdEmployees<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdEmployees<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/AEAssessments',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].AEAssessments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].AEAssessments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Commentaries',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentaries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Commentaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentaries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Commentaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
            ':EmployeeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId/Commentary',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
            ':EmployeeId'
          ].Commentary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
            ':EmployeeId'
          ].Commentary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employees',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployees<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Employees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployees<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Employees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/JournalLines',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].JournalLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].JournalLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/PayLines',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].PayLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].PayLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/ReportLines',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].ReportLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].ReportLines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
            ':TagId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
            ':TagId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
            ':PayRunId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulePayScheduleIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedulePayScheduleIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulePayScheduleIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulePayScheduleIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
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
          client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedules<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
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
        ? getGetEmployerEmployerIdPaySchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PaySchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedules<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
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
        ? getGetEmployerEmployerIdPaySchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PaySchedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdPaySchedulesKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedules', 'POST'] as const
}

export function usePostEmployerEmployerIdPaySchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdPaySchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].PaySchedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedulesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedules.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulesTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdPaySchedulesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].PaySchedules.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPaySchedulesTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdPaySchedulesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdPaySchedulesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PaySchedules.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPaySchedulesTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdPaySchedulesTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].PaySchedules.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionPensionIdKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', keyArgs] as const
}

export function useGetEmployerEmployerIdPensionPensionId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
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
        ? getGetEmployerEmployerIdPensionPensionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensionPensionId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
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
        ? getGetEmployerEmployerIdPensionPensionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdPensionPensionIdKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'PUT'] as const
}

export function usePutEmployerEmployerIdPensionPensionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdPensionPensionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPensionPensionIdKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPensionPensionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPensionPensionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdPensionPensionIdKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdPensionPensionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdPensionPensionIdKey()
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
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionPensionIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Pension/:PensionId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdPensionPensionIdRevisionRevisionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensionPensionIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Pension/:PensionId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionPensionIdRevisionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/Revisions', keyArgs] as const
}

export function useGetEmployerEmployerIdPensionPensionIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'].Revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensionPensionIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'].Revisions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionPensionIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdPensionPensionIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensionPensionIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPensionPensionIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/:EffectiveDate', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdPensionPensionIdEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pensions', keyArgs] as const
}

export function useGetEmployerEmployerIdPensions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
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
        ? getGetEmployerEmployerIdPensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Pensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
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
        ? getGetEmployerEmployerIdPensionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Pensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdPensionsKey() {
  return ['Employer', '/Employer/:EmployerId/Pensions', 'POST'] as const
}

export function usePostEmployerEmployerIdPensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdPensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']> },
      ) => parseResponse(client.Employer[':EmployerId'].Pensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdPensionsEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pensions/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdPensionsEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPensionsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Pensions[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdPensionsEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdPensionsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Pensions[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdReportLineReportLineIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportLine/:ReportLineId', keyArgs] as const
}

export function useGetEmployerEmployerIdReportLineReportLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
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
        ? getGetEmployerEmployerIdReportLineReportLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
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
          client.Employer[':EmployerId'].ReportLine[':ReportLineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdReportLineReportLineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
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
        ? getGetEmployerEmployerIdReportLineReportLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
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
          client.Employer[':EmployerId'].ReportLine[':ReportLineId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdReportLinesKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportLines', keyArgs] as const
}

export function useGetEmployerEmployerIdReportLines<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
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
        ? getGetEmployerEmployerIdReportLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].ReportLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdReportLines<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
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
        ? getGetEmployerEmployerIdReportLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].ReportLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdReportingInstructionReportingInstructionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
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
        ? getGetEmployerEmployerIdReportingInstructionReportingInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
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
          client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
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
        ? getGetEmployerEmployerIdReportingInstructionReportingInstructionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
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
          client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdReportingInstructionReportingInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdReportingInstructionReportingInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdReportingInstructionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportingInstructions', keyArgs] as const
}

export function useGetEmployerEmployerIdReportingInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
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
        ? getGetEmployerEmployerIdReportingInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].ReportingInstructions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdReportingInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
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
        ? getGetEmployerEmployerIdReportingInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].ReportingInstructions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdReportingInstructionsKey() {
  return ['Employer', '/Employer/:EmployerId/ReportingInstructions', 'POST'] as const
}

export function usePostEmployerEmployerIdReportingInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdReportingInstructionsKey()
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
            (typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ReportingInstructions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber', keyArgs] as const
}

export function useGetEmployerEmployerIdRevisionRevisionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Revision[':RevisionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRevisionRevisionNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].Revision[':RevisionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdRevisionRevisionNumberKey() {
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdRevisionRevisionNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Revision[':RevisionNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRevisionRevisionNumberSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdRevisionRevisionNumberSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRevisionRevisionNumberSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
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
          client.Employer[':EmployerId'].Revision[':RevisionNumber'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRevisionRevisionNumberSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRevisionRevisionNumberSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
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
          client.Employer[':EmployerId'].Revision[':RevisionNumber'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRevisionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revisions', keyArgs] as const
}

export function useGetEmployerEmployerIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
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
        ? getGetEmployerEmployerIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
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
        ? getGetEmployerEmployerIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRevisionsSummaryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revisions/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdRevisionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
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
        ? getGetEmployerEmployerIdRevisionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Revisions.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRevisionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
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
        ? getGetEmployerEmployerIdRevisionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Revisions.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionRtiTransactionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId', keyArgs] as const
}

export function useGetEmployerEmployerIdRtiTransactionRtiTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionRtiTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdKey() {
  return ['Employer', '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdRtiTransactionRtiTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdKey()
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
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Summary',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdRtiTransactionRtiTransactionIdSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionRtiTransactionIdSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Summary.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdRtiTransactionRtiTransactionIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionRtiTransactionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionRtiTransactionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions', keyArgs] as const
}

export function useGetEmployerEmployerIdRtiTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
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
        ? getGetEmployerEmployerIdRtiTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].RtiTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
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
        ? getGetEmployerEmployerIdRtiTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].RtiTransactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionsSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdRtiTransactionsSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionsSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
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
          client.Employer[':EmployerId'].RtiTransactions.Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionsSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionsSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
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
          client.Employer[':EmployerId'].RtiTransactions.Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdRtiTransactionsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].RtiTransactions.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdRtiTransactionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].RtiTransactions.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdRtiTransactionsTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdRtiTransactionsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdRtiTransactionsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].RtiTransactions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdRtiTransactionsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdRtiTransactionsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].RtiTransactions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSecretSecretIdKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', keyArgs] as const
}

export function useGetEmployerEmployerIdSecretSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
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
        ? getGetEmployerEmployerIdSecretSecretIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSecretSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
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
        ? getGetEmployerEmployerIdSecretSecretIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSecretSecretIdKey() {
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', 'PUT'] as const
}

export function usePutEmployerEmployerIdSecretSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdSecretSecretIdKey()
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
            (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']
          >
        },
      ) =>
        parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSecretSecretIdKey() {
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdSecretSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdSecretSecretIdKey()
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
            (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].Secret[':SecretId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSecretsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Secrets', keyArgs] as const
}

export function useGetEmployerEmployerIdSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
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
        ? getGetEmployerEmployerIdSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
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
        ? getGetEmployerEmployerIdSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdSecretsKey() {
  return ['Employer', '/Employer/:EmployerId/Secrets', 'POST'] as const
}

export function usePostEmployerEmployerIdSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']> },
      ) => parseResponse(client.Employer[':EmployerId'].Secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'PUT'] as const
}

export function usePutEmployerEmployerIdSubContractorSubContractorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdSubContractorSubContractorIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdSubContractorSubContractorIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'PATCH'] as const
}

export function usePatchEmployerEmployerIdSubContractorSubContractorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEmployerEmployerIdSubContractorSubContractorIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'PATCH',
  ] as const
}

export function usePatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tag[':TagId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tag[':TagId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsKey(
            args,
          )
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
            ':CisInstructionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions',
    'POST',
  ] as const
}

export function usePostEmployerEmployerIdSubContractorSubContractorIdCisInstructions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[
            ':SubContractorId'
          ].CisInstructions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[
            ':SubContractorId'
          ].CisInstructions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tag[':TagId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tag[':TagId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
            ':CisLineId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdJournalLinesKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/JournalLines',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdJournalLines<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].JournalLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdJournalLines<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdJournalLinesKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].JournalLines.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
            ':RevisionNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
            ':RevisionNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
            ':RevisionNumber'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdRevisionsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revisions',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdRevisionsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'][
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags[
            ':EffectiveDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorSubContractorIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdSubContractorSubContractorIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorSubContractorIdEffectiveDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorSubContractorIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].SubContractor[':SubContractorId'][
            ':EffectiveDate'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractors<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
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
        ? getGetEmployerEmployerIdSubContractorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].SubContractors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractors<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
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
        ? getGetEmployerEmployerIdSubContractorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].SubContractors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployerEmployerIdSubContractorsKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractors', 'POST'] as const
}

export function usePostEmployerEmployerIdSubContractors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployerEmployerIdSubContractorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].SubContractors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractorsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractors.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdSubContractorsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].SubContractors.Tag[':TagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorsTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractorsTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdSubContractorsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].SubContractors.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorsTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
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
        ? getGetEmployerEmployerIdSubContractorsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].SubContractors.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSubContractorsEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdSubContractorsEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractors[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSubContractorsEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdSubContractorsEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].SubContractors[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdSummaryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
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
        ? getGetEmployerEmployerIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
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
        ? getGetEmployerEmployerIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdTagTagIdKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
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
        ? getGetEmployerEmployerIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
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
        ? getGetEmployerEmployerIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', 'PUT'] as const
}

export function usePutEmployerEmployerIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEmployerEmployerIdTagTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdTagTagIdKey() {
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdTagTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>
        },
      ) => parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdTagTagIdEffectiveDateKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdTagTagIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Tag[':TagId'][':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdTagTagIdEffectiveDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
        ? getGetEmployerEmployerIdTagTagIdEffectiveDateKey(args)
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
                (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
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
          client.Employer[':EmployerId'].Tag[':TagId'][':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdTagsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
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
        ? getGetEmployerEmployerIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
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
        ? getGetEmployerEmployerIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employer[':EmployerId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdTagsEffectiveDateKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tags/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdTagsEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
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
        ? getGetEmployerEmployerIdTagsEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Tags[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdTagsEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
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
        ? getGetEmployerEmployerIdTagsEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].Tags[':EffectiveDate'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdKey()
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
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
            ':TagId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function usePutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
            ':TagId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function useDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdKey()
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
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
            ':TagId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tags',
    keyArgs,
  ] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[
            ':ThirdPartyTransactionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTags<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransaction[
            ':ThirdPartyTransactionId'
          ].Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionsKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions', keyArgs] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].ThirdPartyTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Employer[':EmployerId'].ThirdPartyTransactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionsTagTagIdKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions/Tag/:TagId', keyArgs] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactionsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransactions.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactionsTagTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsTagTagIdKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransactions.Tag[':TagId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdThirdPartyTransactionsTagsKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions/Tags', keyArgs] as const
}

export function useGetEmployerEmployerIdThirdPartyTransactionsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransactions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdThirdPartyTransactionsTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
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
        ? getGetEmployerEmployerIdThirdPartyTransactionsTagsKey(args)
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
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
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
          client.Employer[':EmployerId'].ThirdPartyTransactions.Tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEffectiveDateKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate', keyArgs] as const
}

export function useGetEmployerEmployerIdEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
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
        ? getGetEmployerEmployerIdEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'][':EffectiveDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
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
        ? getGetEmployerEmployerIdEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employer[':EmployerId'][':EffectiveDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEmployerEmployerIdEffectiveDateKey() {
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate', 'DELETE'] as const
}

export function useDeleteEmployerEmployerIdEffectiveDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEmployerEmployerIdEffectiveDateKey()
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
            (typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']
          >
        },
      ) =>
        parseResponse(client.Employer[':EmployerId'][':EffectiveDate'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployerEmployerIdEffectiveDateSummaryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate/Summary', keyArgs] as const
}

export function useGetEmployerEmployerIdEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'][':EffectiveDate'].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployerEmployerIdEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
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
        ? getGetEmployerEmployerIdEffectiveDateSummaryKey(args)
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
                (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
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
          client.Employer[':EmployerId'][':EffectiveDate'].Summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEmployersKey(args: InferRequestType<typeof client.Employers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers', keyArgs] as const
}

export function useGetEmployers<TError = unknown>(
  args: InferRequestType<typeof client.Employers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployers<TError = unknown>(
  args: InferRequestType<typeof client.Employers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEmployersKey() {
  return ['Employers', '/Employers', 'POST'] as const
}

export function usePostEmployers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Employers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmployersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Employers.$post> }) =>
        parseResponse(client.Employers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmployersSummaryKey(
  args: InferRequestType<typeof client.Employers.Summary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Summary', keyArgs] as const
}

export function useGetEmployersSummary<TError = unknown>(
  args: InferRequestType<typeof client.Employers.Summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
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
        ? getGetEmployersSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployersSummary<TError = unknown>(
  args: InferRequestType<typeof client.Employers.Summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
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
        ? getGetEmployersSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployersTagTagIdKey(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Tag/:TagId', keyArgs] as const
}

export function useGetEmployersTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
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
        ? getGetEmployersTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployersTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
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
        ? getGetEmployersTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployersTagsKey(args: InferRequestType<typeof client.Employers.Tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Tags', keyArgs] as const
}

export function useGetEmployersTags<TError = unknown>(
  args: InferRequestType<typeof client.Employers.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployersTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployersTags<TError = unknown>(
  args: InferRequestType<typeof client.Employers.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmployersTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployersEffectiveDateKey(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/:EffectiveDate', keyArgs] as const
}

export function useGetEmployersEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
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
        ? getGetEmployersEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers[':EffectiveDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployersEffectiveDate<TError = unknown>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
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
        ? getGetEmployersEffectiveDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Employers[':EffectiveDate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmployersEffectiveDateSummaryKey(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/:EffectiveDate/Summary', keyArgs] as const
}

export function useGetEmployersEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
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
        ? getGetEmployersEffectiveDateSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employers[':EffectiveDate'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmployersEffectiveDateSummary<TError = unknown>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
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
        ? getGetEmployersEffectiveDateSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Employers[':EffectiveDate'].Summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthcheckKey() {
  return ['Healthcheck', '/Healthcheck'] as const
}

export function useGetHealthcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthcheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Healthcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthcheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Healthcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsBatchKey(args: InferRequestType<typeof client.Jobs.Batch.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch', keyArgs] as const
}

export function useGetJobsBatch<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsBatch<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsBatchKey() {
  return ['Jobs', '/Jobs/Batch', 'POST'] as const
}

export function usePostJobsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.Batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.Batch.$post> }) =>
        parseResponse(client.Jobs.Batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsBatchJobIdKey() {
  return ['Jobs', '/Jobs/Batch/:JobId', 'DELETE'] as const
}

export function useDeleteJobsBatchJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsBatchJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.Batch[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsBatchJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Info', keyArgs] as const
}

export function useGetJobsBatchJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
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
        ? getGetJobsBatchJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsBatchJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
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
        ? getGetJobsBatchJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsBatchJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Progress', keyArgs] as const
}

export function useGetJobsBatchJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsBatchJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsBatchJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsBatchJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsBatchJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Status', keyArgs] as const
}

export function useGetJobsBatchJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
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
        ? getGetJobsBatchJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsBatchJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
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
        ? getGetJobsBatchJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Batch[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsCisKey(args: InferRequestType<typeof client.Jobs.Cis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis', keyArgs] as const
}

export function useGetJobsCis<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Cis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsCisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Cis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobsCis<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Cis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsCisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Cis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsCisKey() {
  return ['Jobs', '/Jobs/Cis', 'POST'] as const
}

export function usePostJobsCis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.Cis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsCisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.Cis.$post> }) =>
        parseResponse(client.Jobs.Cis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsCisJobIdKey() {
  return ['Jobs', '/Jobs/Cis/:JobId', 'DELETE'] as const
}

export function useDeleteJobsCisJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsCisJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.Cis[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsCisJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Info', keyArgs] as const
}

export function useGetJobsCisJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
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
        ? getGetJobsCisJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsCisJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
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
        ? getGetJobsCisJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsCisJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Progress', keyArgs] as const
}

export function useGetJobsCisJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsCisJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsCisJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsCisJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsCisJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Status', keyArgs] as const
}

export function useGetJobsCisJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
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
        ? getGetJobsCisJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsCisJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
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
        ? getGetJobsCisJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Cis[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsDpsKey(args: InferRequestType<typeof client.Jobs.Dps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps', keyArgs] as const
}

export function useGetJobsDps<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Dps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsDpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Dps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobsDps<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Dps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsDpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Dps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsDpsKey() {
  return ['Jobs', '/Jobs/Dps', 'POST'] as const
}

export function usePostJobsDps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.Dps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsDpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.Dps.$post> }) =>
        parseResponse(client.Jobs.Dps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsDpsJobIdKey() {
  return ['Jobs', '/Jobs/Dps/:JobId', 'DELETE'] as const
}

export function useDeleteJobsDpsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsDpsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.Dps[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsDpsJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Info', keyArgs] as const
}

export function useGetJobsDpsJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
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
        ? getGetJobsDpsJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsDpsJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
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
        ? getGetJobsDpsJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsDpsJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Progress', keyArgs] as const
}

export function useGetJobsDpsJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsDpsJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsDpsJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsDpsJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsDpsJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Status', keyArgs] as const
}

export function useGetJobsDpsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
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
        ? getGetJobsDpsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsDpsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
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
        ? getGetJobsDpsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Dps[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsEmployerEmployerIdKey(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Employer/:EmployerId', keyArgs] as const
}

export function useGetJobsEmployerEmployerId<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
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
        ? getGetJobsEmployerEmployerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Employer[':EmployerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsEmployerEmployerId<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
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
        ? getGetJobsEmployerEmployerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Employer[':EmployerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsPayRunsKey(args: InferRequestType<typeof client.Jobs.PayRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns', keyArgs] as const
}

export function useGetJobsPayRuns<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.PayRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsPayRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsPayRuns<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.PayRuns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsPayRunsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsPayRunsKey() {
  return ['Jobs', '/Jobs/PayRuns', 'POST'] as const
}

export function usePostJobsPayRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.PayRuns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsPayRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.PayRuns.$post> }) =>
        parseResponse(client.Jobs.PayRuns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsPayRunsJobIdKey() {
  return ['Jobs', '/Jobs/PayRuns/:JobId', 'DELETE'] as const
}

export function useDeleteJobsPayRunsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsPayRunsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.PayRuns[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsPayRunsJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Info', keyArgs] as const
}

export function useGetJobsPayRunsJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
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
        ? getGetJobsPayRunsJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsPayRunsJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
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
        ? getGetJobsPayRunsJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsPayRunsJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Progress', keyArgs] as const
}

export function useGetJobsPayRunsJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsPayRunsJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsPayRunsJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsPayRunsJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsPayRunsJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Status', keyArgs] as const
}

export function useGetJobsPayRunsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
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
        ? getGetJobsPayRunsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsPayRunsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
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
        ? getGetJobsPayRunsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.PayRuns[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsRtiKey(args: InferRequestType<typeof client.Jobs.Rti.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti', keyArgs] as const
}

export function useGetJobsRti<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Rti.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsRtiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Rti.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobsRti<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.Rti.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsRtiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Jobs.Rti.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsRtiKey() {
  return ['Jobs', '/Jobs/Rti', 'POST'] as const
}

export function usePostJobsRti<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.Rti.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsRtiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.Rti.$post> }) =>
        parseResponse(client.Jobs.Rti.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsRtiJobIdKey() {
  return ['Jobs', '/Jobs/Rti/:JobId', 'DELETE'] as const
}

export function useDeleteJobsRtiJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsRtiJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.Rti[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsRtiJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Info', keyArgs] as const
}

export function useGetJobsRtiJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
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
        ? getGetJobsRtiJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsRtiJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
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
        ? getGetJobsRtiJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsRtiJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Progress', keyArgs] as const
}

export function useGetJobsRtiJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsRtiJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsRtiJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsRtiJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsRtiJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Status', keyArgs] as const
}

export function useGetJobsRtiJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
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
        ? getGetJobsRtiJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsRtiJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
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
        ? getGetJobsRtiJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.Rti[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsThirdPartyKey(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty', keyArgs] as const
}

export function useGetJobsThirdParty<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsThirdPartyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsThirdParty<TError = unknown>(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsThirdPartyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobsThirdPartyKey() {
  return ['Jobs', '/Jobs/ThirdParty', 'POST'] as const
}

export function usePostJobsThirdParty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.Jobs.ThirdParty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsThirdPartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Jobs.ThirdParty.$post> }) =>
        parseResponse(client.Jobs.ThirdParty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJobsThirdPartyJobIdKey() {
  return ['Jobs', '/Jobs/ThirdParty/:JobId', 'DELETE'] as const
}

export function useDeleteJobsThirdPartyJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobsThirdPartyJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']> },
      ) => parseResponse(client.Jobs.ThirdParty[':JobId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsThirdPartyJobIdInfoKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Info', keyArgs] as const
}

export function useGetJobsThirdPartyJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
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
        ? getGetJobsThirdPartyJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsThirdPartyJobIdInfo<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
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
        ? getGetJobsThirdPartyJobIdInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty[':JobId'].Info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsThirdPartyJobIdProgressKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Progress', keyArgs] as const
}

export function useGetJobsThirdPartyJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsThirdPartyJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Jobs.ThirdParty[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsThirdPartyJobIdProgress<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
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
        ? getGetJobsThirdPartyJobIdProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Jobs.ThirdParty[':JobId'].Progress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsThirdPartyJobIdStatusKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Status', keyArgs] as const
}

export function useGetJobsThirdPartyJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
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
        ? getGetJobsThirdPartyJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsThirdPartyJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
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
        ? getGetJobsThirdPartyJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Jobs.ThirdParty[':JobId'].Status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJournalInstructionJournalInstructionIdKey(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', keyArgs] as const
}

export function useGetJournalInstructionJournalInstructionId<TError = unknown>(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
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
        ? getGetJournalInstructionJournalInstructionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.JournalInstruction[':JournalInstructionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJournalInstructionJournalInstructionId<TError = unknown>(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
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
        ? getGetJournalInstructionJournalInstructionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.JournalInstruction[':JournalInstructionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutJournalInstructionJournalInstructionIdKey() {
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', 'PUT'] as const
}

export function usePutJournalInstructionJournalInstructionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutJournalInstructionJournalInstructionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>
        },
      ) =>
        parseResponse(client.JournalInstruction[':JournalInstructionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteJournalInstructionJournalInstructionIdKey() {
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', 'DELETE'] as const
}

export function useDeleteJournalInstructionJournalInstructionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJournalInstructionJournalInstructionIdKey()
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
            (typeof client.JournalInstruction)[':JournalInstructionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.JournalInstruction[':JournalInstructionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetJournalInstructionsKey(
  args: InferRequestType<typeof client.JournalInstructions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['JournalInstructions', '/JournalInstructions', keyArgs] as const
}

export function useGetJournalInstructions<TError = unknown>(
  args: InferRequestType<typeof client.JournalInstructions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>
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
        ? getGetJournalInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.JournalInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJournalInstructions<TError = unknown>(
  args: InferRequestType<typeof client.JournalInstructions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>
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
        ? getGetJournalInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.JournalInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJournalInstructionsKey() {
  return ['JournalInstructions', '/JournalInstructions', 'POST'] as const
}

export function usePostJournalInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.JournalInstructions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJournalInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.JournalInstructions.$post> }) =>
        parseResponse(client.JournalInstructions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionPermissionIdKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId', keyArgs] as const
}

export function useGetPermissionPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
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
        ? getGetPermissionPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permission[':PermissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
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
        ? getGetPermissionPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permission[':PermissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPermissionPermissionIdKey() {
  return ['Permission', '/Permission/:PermissionId', 'PUT'] as const
}

export function usePutPermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPermissionPermissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Permission)[':PermissionId']['$put']> },
      ) => parseResponse(client.Permission[':PermissionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionPermissionIdKey() {
  return ['Permission', '/Permission/:PermissionId', 'DELETE'] as const
}

export function useDeletePermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionPermissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']> },
      ) => parseResponse(client.Permission[':PermissionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPermissionPermissionIdKey() {
  return ['Permission', '/Permission/:PermissionId', 'PATCH'] as const
}

export function usePatchPermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPermissionPermissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']> },
      ) => parseResponse(client.Permission[':PermissionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionPermissionIdTagTagIdKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', keyArgs] as const
}

export function useGetPermissionPermissionIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>
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
        ? getGetPermissionPermissionIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionPermissionIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>
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
        ? getGetPermissionPermissionIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPermissionPermissionIdTagTagIdKey() {
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', 'PUT'] as const
}

export function usePutPermissionPermissionIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPermissionPermissionIdTagTagIdKey()
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
            (typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']
          >
        },
      ) => parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePermissionPermissionIdTagTagIdKey() {
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', 'DELETE'] as const
}

export function useDeletePermissionPermissionIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePermissionPermissionIdTagTagIdKey()
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
            (typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']
          >
        },
      ) =>
        parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionPermissionIdTagsKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId/Tags', keyArgs] as const
}

export function useGetPermissionPermissionIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
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
        ? getGetPermissionPermissionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permission[':PermissionId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionPermissionIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
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
        ? getGetPermissionPermissionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permission[':PermissionId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPermissionsKey(args: InferRequestType<typeof client.Permissions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions', keyArgs] as const
}

export function useGetPermissions<TError = unknown>(
  args: InferRequestType<typeof client.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissions<TError = unknown>(
  args: InferRequestType<typeof client.Permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPermissionsKey() {
  return ['Permissions', '/Permissions', 'POST'] as const
}

export function usePostPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Permissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Permissions.$post> }) =>
        parseResponse(client.Permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPermissionsTagTagIdKey(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions/Tag/:TagId', keyArgs] as const
}

export function useGetPermissionsTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>
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
        ? getGetPermissionsTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionsTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>
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
        ? getGetPermissionsTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPermissionsTagsKey(
  args: InferRequestType<typeof client.Permissions.Tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions/Tags', keyArgs] as const
}

export function useGetPermissionsTags<TError = unknown>(
  args: InferRequestType<typeof client.Permissions.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
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
        ? getGetPermissionsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionsTags<TError = unknown>(
  args: InferRequestType<typeof client.Permissions.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
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
        ? getGetPermissionsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Permissions.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryKey() {
  return ['Query', '/Query', 'POST'] as const
}

export function usePostQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Query.$post> }) =>
        parseResponse(client.Query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReferenceDataJournalExpressionDataTableKey(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ReferenceData', '/ReferenceData/JournalExpressionDataTable', keyArgs] as const
}

export function useGetReferenceDataJournalExpressionDataTable<TError = unknown>(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
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
        ? getGetReferenceDataJournalExpressionDataTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ReferenceData.JournalExpressionDataTable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferenceDataJournalExpressionDataTable<TError = unknown>(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
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
        ? getGetReferenceDataJournalExpressionDataTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ReferenceData.JournalExpressionDataTable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportACTPAYINSRunKey(
  args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/ACTPAYINS/run', keyArgs] as const
}

export function useGetReportACTPAYINSRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>
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
        ? getGetReportACTPAYINSRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.ACTPAYINS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportACTPAYINSRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>
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
        ? getGetReportACTPAYINSRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.ACTPAYINS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportAOELIABILITYRunKey(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/AOELIABILITY/run', keyArgs] as const
}

export function useGetReportAOELIABILITYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
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
        ? getGetReportAOELIABILITYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.AOELIABILITY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportAOELIABILITYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
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
        ? getGetReportAOELIABILITYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.AOELIABILITY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportDPSMSGRunKey(
  args: InferRequestType<typeof client.Report.DPSMSG.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/DPSMSG/run', keyArgs] as const
}

export function useGetReportDPSMSGRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.DPSMSG.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
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
        ? getGetReportDPSMSGRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.DPSMSG.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportDPSMSGRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.DPSMSG.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
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
        ? getGetReportDPSMSGRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.DPSMSG.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportEMPSUMRunKey(
  args: InferRequestType<typeof client.Report.EMPSUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/EMPSUM/run', keyArgs] as const
}

export function useGetReportEMPSUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.EMPSUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
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
        ? getGetReportEMPSUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.EMPSUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportEMPSUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.EMPSUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
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
        ? getGetReportEMPSUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.EMPSUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportGRO2NETRunKey(
  args: InferRequestType<typeof client.Report.GRO2NET.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/GRO2NET/run', keyArgs] as const
}

export function useGetReportGRO2NETRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.GRO2NET.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
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
        ? getGetReportGRO2NETRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.GRO2NET.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportGRO2NETRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.GRO2NET.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
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
        ? getGetReportGRO2NETRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.GRO2NET.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportHOLBALRunKey(
  args: InferRequestType<typeof client.Report.HOLBAL.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/HOLBAL/run', keyArgs] as const
}

export function useGetReportHOLBALRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.HOLBAL.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
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
        ? getGetReportHOLBALRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.HOLBAL.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportHOLBALRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.HOLBAL.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
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
        ? getGetReportHOLBALRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.HOLBAL.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportJOURNALRunKey(
  args: InferRequestType<typeof client.Report.JOURNAL.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/JOURNAL/run', keyArgs] as const
}

export function useGetReportJOURNALRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.JOURNAL.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
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
        ? getGetReportJOURNALRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.JOURNAL.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportJOURNALRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.JOURNAL.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
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
        ? getGetReportJOURNALRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.JOURNAL.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportLASTPAYDATERunKey(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/LASTPAYDATE/run', keyArgs] as const
}

export function useGetReportLASTPAYDATERun<TError = unknown>(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
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
        ? getGetReportLASTPAYDATERunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.LASTPAYDATE.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportLASTPAYDATERun<TError = unknown>(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
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
        ? getGetReportLASTPAYDATERunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.LASTPAYDATE.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportNETPAYRunKey(
  args: InferRequestType<typeof client.Report.NETPAY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/NETPAY/run', keyArgs] as const
}

export function useGetReportNETPAYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.NETPAY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
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
        ? getGetReportNETPAYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.NETPAY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportNETPAYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.NETPAY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
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
        ? getGetReportNETPAYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.NETPAY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportNEXTPERIODRunKey(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/NEXTPERIOD/run', keyArgs] as const
}

export function useGetReportNEXTPERIODRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
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
        ? getGetReportNEXTPERIODRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.NEXTPERIOD.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportNEXTPERIODRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
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
        ? getGetReportNEXTPERIODRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.NEXTPERIOD.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportP11SUMRunKey(
  args: InferRequestType<typeof client.Report.P11SUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P11SUM/run', keyArgs] as const
}

export function useGetReportP11SUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.P11SUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
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
        ? getGetReportP11SUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P11SUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportP11SUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.P11SUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
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
        ? getGetReportP11SUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P11SUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportP32RunKey(args: InferRequestType<typeof client.Report.P32.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P32/run', keyArgs] as const
}

export function useGetReportP32Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P32.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP32RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P32.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportP32Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P32.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP32RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P32.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportP32SUMRunKey(
  args: InferRequestType<typeof client.Report.P32SUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P32SUM/run', keyArgs] as const
}

export function useGetReportP32SUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.P32SUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
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
        ? getGetReportP32SUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P32SUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportP32SUMRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.P32SUM.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
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
        ? getGetReportP32SUMRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P32SUM.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportP45RunKey(args: InferRequestType<typeof client.Report.P45.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P45/run', keyArgs] as const
}

export function useGetReportP45Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P45.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP45RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P45.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportP45Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P45.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP45RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P45.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportP60RunKey(args: InferRequestType<typeof client.Report.P60.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P60/run', keyArgs] as const
}

export function useGetReportP60Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P60.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP60RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P60.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportP60Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.P60.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportP60RunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.P60.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPAPDISRunKey(
  args: InferRequestType<typeof client.Report.PAPDIS.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAPDIS/run', keyArgs] as const
}

export function useGetReportPAPDISRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAPDIS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
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
        ? getGetReportPAPDISRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAPDIS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPAPDISRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAPDIS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
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
        ? getGetReportPAPDISRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAPDIS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPASSRunKey(args: InferRequestType<typeof client.Report.PASS.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PASS/run', keyArgs] as const
}

export function useGetReportPASSRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PASS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportPASSRunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PASS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPASSRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PASS.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportPASSRunKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PASS.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPAYDASHBOARDRunKey(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAYDASHBOARD/run', keyArgs] as const
}

export function useGetReportPAYDASHBOARDRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
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
        ? getGetReportPAYDASHBOARDRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAYDASHBOARD.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPAYDASHBOARDRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
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
        ? getGetReportPAYDASHBOARDRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAYDASHBOARD.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPAYSLIP3RunKey(
  args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAYSLIP3/run', keyArgs] as const
}

export function useGetReportPAYSLIP3Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>
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
        ? getGetReportPAYSLIP3RunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAYSLIP3.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPAYSLIP3Run<TError = unknown>(
  args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>
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
        ? getGetReportPAYSLIP3RunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PAYSLIP3.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPENLIABILITYRunKey(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PENLIABILITY/run', keyArgs] as const
}

export function useGetReportPENLIABILITYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
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
        ? getGetReportPENLIABILITYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PENLIABILITY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPENLIABILITYRun<TError = unknown>(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
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
        ? getGetReportPENLIABILITYRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report.PENLIABILITY.run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportReportDefinitionIdKey(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/:ReportDefinitionId', keyArgs] as const
}

export function useGetReportReportDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
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
        ? getGetReportReportDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report[':ReportDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportReportDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
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
        ? getGetReportReportDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report[':ReportDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReportReportDefinitionIdKey() {
  return ['Report', '/Report/:ReportDefinitionId', 'PUT'] as const
}

export function usePutReportReportDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReportReportDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']> },
      ) => parseResponse(client.Report[':ReportDefinitionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportReportDefinitionIdKey() {
  return ['Report', '/Report/:ReportDefinitionId', 'DELETE'] as const
}

export function useDeleteReportReportDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportReportDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']> },
      ) => parseResponse(client.Report[':ReportDefinitionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportReportDefinitionIdRunKey(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/:ReportDefinitionId/run', keyArgs] as const
}

export function useGetReportReportDefinitionIdRun<TError = unknown>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
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
        ? getGetReportReportDefinitionIdRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report[':ReportDefinitionId'].run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportReportDefinitionIdRun<TError = unknown>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
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
        ? getGetReportReportDefinitionIdRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Report[':ReportDefinitionId'].run.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsKey(args: InferRequestType<typeof client.Reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports', keyArgs] as const
}

export function useGetReports<TError = unknown>(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Reports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReports<TError = unknown>(
  args: InferRequestType<typeof client.Reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Reports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostReportsKey() {
  return ['Reports', '/Reports', 'POST'] as const
}

export function usePostReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Reports.$post> }) =>
        parseResponse(client.Reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSchemasKey(args: InferRequestType<typeof client.Schemas.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Schemas', '/Schemas', keyArgs] as const
}

export function useGetSchemas<TError = unknown>(
  args: InferRequestType<typeof client.Schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Schemas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSchemas<TError = unknown>(
  args: InferRequestType<typeof client.Schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Schemas.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSchemasDtoDataTypeKey(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Schemas', '/Schemas/:DtoDataType', keyArgs] as const
}

export function useGetSchemasDtoDataType<TError = unknown>(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
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
        ? getGetSchemasDtoDataTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Schemas[':DtoDataType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchemasDtoDataType<TError = unknown>(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
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
        ? getGetSchemasDtoDataTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Schemas[':DtoDataType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSecretSecretIdKey(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Secret', '/Secret/:SecretId', keyArgs] as const
}

export function useGetSecretSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSecretSecretIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Secret[':SecretId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretSecretId<TError = unknown>(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSecretSecretIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Secret[':SecretId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSecretSecretIdKey() {
  return ['Secret', '/Secret/:SecretId', 'PUT'] as const
}

export function usePutSecretSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Secret)[':SecretId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecretSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Secret)[':SecretId']['$put']> },
      ) => parseResponse(client.Secret[':SecretId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecretSecretIdKey() {
  return ['Secret', '/Secret/:SecretId', 'DELETE'] as const
}

export function useDeleteSecretSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Secret)[':SecretId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Secret)[':SecretId']['$delete']> },
      ) => parseResponse(client.Secret[':SecretId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsKey(args: InferRequestType<typeof client.Secrets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Secrets', '/Secrets', keyArgs] as const
}

export function useGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.Secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.Secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSecretsKey() {
  return ['Secrets', '/Secrets', 'POST'] as const
}

export function usePostSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Secrets.$post> }) =>
        parseResponse(client.Secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplateDtoDataTypeKey(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Template', '/Template/:DtoDataType', keyArgs] as const
}

export function useGetTemplateDtoDataType<TError = unknown>(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>
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
        ? getGetTemplateDtoDataTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Template[':DtoDataType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateDtoDataType<TError = unknown>(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>
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
        ? getGetTemplateDtoDataTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Template[':DtoDataType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.Templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Templates', '/Templates', keyArgs] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.Templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.Templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransformTransformDefinitionIdKey(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Transform', '/Transform/:TransformDefinitionId', keyArgs] as const
}

export function useGetTransformTransformDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
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
        ? getGetTransformTransformDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Transform[':TransformDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformTransformDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
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
        ? getGetTransformTransformDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Transform[':TransformDefinitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTransformTransformDefinitionIdKey() {
  return ['Transform', '/Transform/:TransformDefinitionId', 'PUT'] as const
}

export function usePutTransformTransformDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransformTransformDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']> },
      ) => parseResponse(client.Transform[':TransformDefinitionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTransformTransformDefinitionIdKey() {
  return ['Transform', '/Transform/:TransformDefinitionId', 'DELETE'] as const
}

export function useDeleteTransformTransformDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransformTransformDefinitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>
        },
      ) => parseResponse(client.Transform[':TransformDefinitionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransformsKey(args: InferRequestType<typeof client.Transforms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Transforms', '/Transforms', keyArgs] as const
}

export function useGetTransforms<TError = unknown>(
  args: InferRequestType<typeof client.Transforms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransformsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Transforms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransforms<TError = unknown>(
  args: InferRequestType<typeof client.Transforms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransformsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Transforms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransformsKey() {
  return ['Transforms', '/Transforms', 'POST'] as const
}

export function usePostTransforms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Transforms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransformsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Transforms.$post> }) =>
        parseResponse(client.Transforms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdKey(
  args: InferRequestType<(typeof client.User)[':UserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId', keyArgs] as const
}

export function useGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserUserIdKey() {
  return ['User', '/User/:UserId', 'PUT'] as const
}

export function usePutUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User)[':UserId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.User)[':UserId']['$put']> }) =>
        parseResponse(client.User[':UserId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserUserIdKey() {
  return ['User', '/User/:UserId', 'DELETE'] as const
}

export function useDeleteUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User)[':UserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.User)[':UserId']['$delete']> },
      ) => parseResponse(client.User[':UserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserUserIdKey() {
  return ['User', '/User/:UserId', 'PATCH'] as const
}

export function usePatchUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User)[':UserId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.User)[':UserId']['$patch']> },
      ) => parseResponse(client.User[':UserId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdPermissionsKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Permissions', keyArgs] as const
}

export function useGetUserUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
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
        ? getGetUserUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
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
        ? getGetUserUserIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdTagTagIdKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Tag/:TagId', keyArgs] as const
}

export function useGetUserUserIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
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
        ? getGetUserUserIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
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
        ? getGetUserUserIdTagTagIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserUserIdTagTagIdKey() {
  return ['User', '/User/:UserId/Tag/:TagId', 'PUT'] as const
}

export function usePutUserUserIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserUserIdTagTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']> },
      ) => parseResponse(client.User[':UserId'].Tag[':TagId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserUserIdTagTagIdKey() {
  return ['User', '/User/:UserId/Tag/:TagId', 'DELETE'] as const
}

export function useDeleteUserUserIdTagTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserUserIdTagTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']> },
      ) => parseResponse(client.User[':UserId'].Tag[':TagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdTagsKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Tags', keyArgs] as const
}

export function useGetUserUserIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.User[':UserId'].Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.Users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users', keyArgs] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['Users', '/Users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Users.$post> }) =>
        parseResponse(client.Users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersTagTagIdKey(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/Tag/:TagId', keyArgs] as const
}

export function useGetUsersTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersTagTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersTagTagId<TError = unknown>(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersTagTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Tag[':TagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersTagsKey(args: InferRequestType<typeof client.Users.Tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/Tags', keyArgs] as const
}

export function useGetUsersTags<TError = unknown>(
  args: InferRequestType<typeof client.Users.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersTags<TError = unknown>(
  args: InferRequestType<typeof client.Users.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Users.Tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
