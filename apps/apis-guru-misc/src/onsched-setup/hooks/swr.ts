import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSetupKey() {
  return ['setup'] as const
}

export function getGetSetupV1AppointmentsKey(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
) {
  return ['setup', '/setup/v1/appointments', args] as const
}

export function useGetSetupV1Appointments<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1AppointmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.appointments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Appointments<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.appointments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1AppointmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.appointments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.appointments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1AppointmentsIdKey(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/appointments/:id', args] as const
}

export function useGetSetupV1AppointmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1AppointmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.appointments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1AppointmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.appointments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1AppointmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.appointments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.appointments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1AppointmentsIdReassignResourceResourceIdKey() {
  return ['setup', '/setup/v1/appointments/:id/reassign/resource/:resourceId', 'PUT'] as const
}

export function usePutSetupV1AppointmentsIdReassignResourceResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1AppointmentsIdReassignResourceResourceIdKey()
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
            (typeof client.setup.v1.appointments)[':id']['reassign']['resource'][':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.appointments[':id'].reassign.resource[':resourceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1BusinessusersKey(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
) {
  return ['setup', '/setup/v1/businessusers', args] as const
}

export function useGetSetupV1Businessusers<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.businessusers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Businessusers<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.businessusers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.businessusers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1BusinessusersKey() {
  return ['setup', '/setup/v1/businessusers', 'POST'] as const
}

export function usePostSetupV1Businessusers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.businessusers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.businessusers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1BusinessusersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.businessusers.$post> },
      ) => parseResponse(client.setup.v1.businessusers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1BusinessusersPermissionsKey(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
) {
  return ['setup', '/setup/v1/businessusers/permissions', args] as const
}

export function useGetSetupV1BusinessusersPermissions<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.businessusers.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1BusinessusersPermissions<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.businessusers.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.businessusers.permissions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.businessusers.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1BusinessusersEmailCompaniesKey(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
) {
  return ['setup', '/setup/v1/businessusers/:email/companies', args] as const
}

export function useGetSetupV1BusinessusersEmailCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersEmailCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.businessusers[':email'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1BusinessusersEmailCompanies<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersEmailCompaniesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.businessusers)[':email']['companies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.businessusers[':email'].companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1BusinessusersIdKey(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/businessusers/:id', args] as const
}

export function useGetSetupV1BusinessusersId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.businessusers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1BusinessusersId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1BusinessusersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.businessusers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1BusinessusersIdKey() {
  return ['setup', '/setup/v1/businessusers/:id', 'PUT'] as const
}

export function usePutSetupV1BusinessusersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1BusinessusersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.businessusers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1BusinessusersIdKey() {
  return ['setup', '/setup/v1/businessusers/:id', 'DELETE'] as const
}

export function useDeleteSetupV1BusinessusersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.businessusers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1BusinessusersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.businessusers)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.businessusers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CalendarsKey(
  args: InferRequestType<typeof client.setup.v1.calendars.$get>,
) {
  return ['setup', '/setup/v1/calendars', args] as const
}

export function useGetSetupV1Calendars<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.calendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Calendars<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.calendars.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1CalendarsKey() {
  return ['setup', '/setup/v1/calendars', 'POST'] as const
}

export function usePostSetupV1Calendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.calendars.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.calendars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.calendars.$post> }) =>
        parseResponse(client.setup.v1.calendars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1CalendarsBlockIdKey() {
  return ['setup', '/setup/v1/calendars/block/:id', 'PUT'] as const
}

export function usePutSetupV1CalendarsBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CalendarsBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.calendars.block[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1CalendarsBlockIdKey() {
  return ['setup', '/setup/v1/calendars/block/:id', 'DELETE'] as const
}

export function useDeleteSetupV1CalendarsBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1CalendarsBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.calendars.block)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.calendars.block[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CalendarsBlocksIdKey(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/blocks/:id', args] as const
}

export function useGetSetupV1CalendarsBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CalendarsBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CalendarsIdKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id', args] as const
}

export function useGetSetupV1CalendarsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CalendarsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1CalendarsIdKey() {
  return ['setup', '/setup/v1/calendars/:id', 'PUT'] as const
}

export function usePutSetupV1CalendarsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CalendarsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.calendars[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1CalendarsIdKey() {
  return ['setup', '/setup/v1/calendars/:id', 'DELETE'] as const
}

export function useDeleteSetupV1CalendarsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1CalendarsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.calendars)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.calendars[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1CalendarsIdBlockKey() {
  return ['setup', '/setup/v1/calendars/:id/block', 'POST'] as const
}

export function usePostSetupV1CalendarsIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CalendarsIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.calendars)[':id']['block']['$post']> },
      ) => parseResponse(client.setup.v1.calendars[':id'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CalendarsIdBlocksKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id/blocks', args] as const
}

export function useGetSetupV1CalendarsIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CalendarsIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.calendars[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1CalendarsIdRecoverKey() {
  return ['setup', '/setup/v1/calendars/:id/recover', 'PUT'] as const
}

export function usePutSetupV1CalendarsIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CalendarsIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.calendars)[':id']['recover']['$put']> },
      ) => parseResponse(client.setup.v1.calendars[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CalendarsIdServicesKey(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
) {
  return ['setup', '/setup/v1/calendars/:id/services', args] as const
}

export function useGetSetupV1CalendarsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.calendars[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CalendarsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CalendarsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.calendars)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.calendars[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CompaniesKey() {
  return ['setup', '/setup/v1/companies'] as const
}

export function useGetSetupV1Companies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetupV1CompaniesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Companies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSetupV1CompaniesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1CompaniesKey() {
  return ['setup', '/setup/v1/companies', 'PUT'] as const
}

export function usePutSetupV1Companies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.companies.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.companies.$put> }) =>
        parseResponse(client.setup.v1.companies.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1CompaniesKey() {
  return ['setup', '/setup/v1/companies', 'POST'] as const
}

export function usePostSetupV1Companies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.companies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CompaniesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.companies.$post> }) =>
        parseResponse(client.setup.v1.companies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesDomainsKey() {
  return ['setup', '/setup/v1/companies/domains'] as const
}

export function useGetSetupV1CompaniesDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1CompaniesDomainsKey() {
  return ['setup', '/setup/v1/companies/domains', 'POST'] as const
}

export function usePostSetupV1CompaniesDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.domains.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.companies.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CompaniesDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.companies.domains.$post> },
      ) => parseResponse(client.setup.v1.companies.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesDomainsIdKey(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/companies/domains/:id', args] as const
}

export function useGetSetupV1CompaniesDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesDomainsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesDomainsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesDomainsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.domains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1CompaniesDomainsIdKey() {
  return ['setup', '/setup/v1/companies/domains/:id', 'PUT'] as const
}

export function usePutSetupV1CompaniesDomainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CompaniesDomainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.companies.domains[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1CompaniesDomainsIdKey() {
  return ['setup', '/setup/v1/companies/domains/:id', 'DELETE'] as const
}

export function useDeleteSetupV1CompaniesDomainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1CompaniesDomainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.companies.domains)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.companies.domains[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesEmailTemplatesKey() {
  return ['setup', '/setup/v1/companies/email/templates'] as const
}

export function useGetSetupV1CompaniesEmailTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesEmailTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.companies.email.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesEmailTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesEmailTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.companies.email.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CompaniesEmailTemplatesMasterKey() {
  return ['setup', '/setup/v1/companies/email/templates/master'] as const
}

export function useGetSetupV1CompaniesEmailTemplatesMaster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesEmailTemplatesMasterKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.setup.v1.companies.email.templates.master.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesEmailTemplatesMaster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesEmailTemplatesMasterKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.setup.v1.companies.email.templates.master.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1CompaniesEmailTemplatesMasterKey() {
  return ['setup', '/setup/v1/companies/email/templates/master', 'POST'] as const
}

export function usePostSetupV1CompaniesEmailTemplatesMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CompaniesEmailTemplatesMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.setup.v1.companies.email.templates.master.$post> },
      ) =>
        parseResponse(client.setup.v1.companies.email.templates.master.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1CompaniesEmailTemplatesMasterKey() {
  return ['setup', '/setup/v1/companies/email/templates/master', 'DELETE'] as const
}

export function useDeleteSetupV1CompaniesEmailTemplatesMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.setup.v1.companies.email.templates.master.$delete>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1CompaniesEmailTemplatesMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.setup.v1.companies.email.templates.master.$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesEmailTemplatesTemplateNameKey(
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
) {
  return ['setup', '/setup/v1/companies/email/templates/:templateName', args] as const
}

export function useGetSetupV1CompaniesEmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
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
        ? getGetSetupV1CompaniesEmailTemplatesTemplateNameKey(args)
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
                (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
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
          client.setup.v1.companies.email.templates[':templateName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesEmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
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
        ? getGetSetupV1CompaniesEmailTemplatesTemplateNameKey(args)
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
                (typeof client.setup.v1.companies.email.templates)[':templateName']['$get']
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
          client.setup.v1.companies.email.templates[':templateName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CompaniesRegionsKey(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
) {
  return ['setup', '/setup/v1/companies/regions', args] as const
}

export function useGetSetupV1CompaniesRegions<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesRegions<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.companies.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1CompaniesRegionsKey() {
  return ['setup', '/setup/v1/companies/regions', 'POST'] as const
}

export function usePostSetupV1CompaniesRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.companies.regions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.companies.regions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1CompaniesRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.companies.regions.$post> },
      ) => parseResponse(client.setup.v1.companies.regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesRegionsIdKey(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/companies/regions/:id', args] as const
}

export function useGetSetupV1CompaniesRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesRegionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesRegionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.companies.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1CompaniesRegionsIdKey() {
  return ['setup', '/setup/v1/companies/regions/:id', 'PUT'] as const
}

export function usePutSetupV1CompaniesRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1CompaniesRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.companies.regions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1CompaniesRegionsIdKey() {
  return ['setup', '/setup/v1/companies/regions/:id', 'DELETE'] as const
}

export function useDeleteSetupV1CompaniesRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1CompaniesRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.companies.regions)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.companies.regions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1CompaniesTimezonesDateKey(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
) {
  return ['setup', '/setup/v1/companies/timezones/:date', args] as const
}

export function useGetSetupV1CompaniesTimezonesDate<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesTimezonesDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.companies.timezones[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CompaniesTimezonesDate<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CompaniesTimezonesDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.companies.timezones)[':date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.companies.timezones[':date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CustomersKey(
  args: InferRequestType<typeof client.setup.v1.customers.$get>,
) {
  return ['setup', '/setup/v1/customers', args] as const
}

export function useGetSetupV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CustomersIdKey(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/customers/:id', args] as const
}

export function useGetSetupV1CustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1CustomersIdPrivacyKey(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
) {
  return ['setup', '/setup/v1/customers/:id/privacy', args] as const
}

export function useGetSetupV1CustomersIdPrivacy<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersIdPrivacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers[':id'].privacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1CustomersIdPrivacy<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1CustomersIdPrivacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.customers)[':id']['privacy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.customers[':id'].privacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1LocationsKey(
  args: InferRequestType<typeof client.setup.v1.locations.$get>,
) {
  return ['setup', '/setup/v1/locations', args] as const
}

export function useGetSetupV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Locations<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1LocationsKey() {
  return ['setup', '/setup/v1/locations', 'POST'] as const
}

export function usePostSetupV1Locations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.locations.$post> }) =>
        parseResponse(client.setup.v1.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1LocationsBulkKey() {
  return ['setup', '/setup/v1/locations/bulk', 'POST'] as const
}

export function usePostSetupV1LocationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.locations.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.locations.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.locations.bulk.$post> },
      ) => parseResponse(client.setup.v1.locations.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsServicesIdKey(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/locations/services/:id', args] as const
}

export function useGetSetupV1LocationsServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsServicesIdKey() {
  return ['setup', '/setup/v1/locations/services/:id', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations.services)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.locations.services)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.locations.services[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id', args] as const
}

export function useGetSetupV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1LocationsIdKey() {
  return ['setup', '/setup/v1/locations/:id', 'PUT'] as const
}

export function usePutSetupV1LocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1LocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.locations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdKey() {
  return ['setup', '/setup/v1/locations/:id', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.locations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdAppointmentremindersKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/appointmentreminders', args] as const
}

export function useGetSetupV1LocationsIdAppointmentreminders<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdAppointmentremindersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.setup.v1.locations[':id'].appointmentreminders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsIdAppointmentreminders<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdAppointmentremindersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.setup.v1.locations[':id'].appointmentreminders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1LocationsIdAppointmentremindersKey() {
  return ['setup', '/setup/v1/locations/:id/appointmentreminders', 'PUT'] as const
}

export function usePutSetupV1LocationsIdAppointmentreminders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1LocationsIdAppointmentremindersKey()
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
            (typeof client.setup.v1.locations)[':id']['appointmentreminders']['$put']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].appointmentreminders.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdDeleteallimagesKey() {
  return ['setup', '/setup/v1/locations/:id/deleteallimages', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdDeleteallimages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdDeleteallimagesKey()
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
            (typeof client.setup.v1.locations)[':id']['deleteallimages']['$delete']
          >
        },
      ) =>
        parseResponse(client.setup.v1.locations[':id'].deleteallimages.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdDeleteimageKey() {
  return ['setup', '/setup/v1/locations/:id/deleteimage', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdDeleteimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdDeleteimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['deleteimage']['$delete']>
        },
      ) => parseResponse(client.setup.v1.locations[':id'].deleteimage.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdEmailTemplatesKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates', args] as const
}

export function useGetSetupV1LocationsIdEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations[':id'].email.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsIdEmailTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdEmailTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations[':id'].email.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1LocationsIdEmailTemplatesKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates', 'POST'] as const
}

export function usePostSetupV1LocationsIdEmailTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['email']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsIdEmailTemplatesKey()
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
            (typeof client.setup.v1.locations)[':id']['email']['templates']['$post']
          >
        },
      ) =>
        parseResponse(client.setup.v1.locations[':id'].email.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdEmailTemplatesMasterKey(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', args] as const
}

export function useGetSetupV1LocationsIdEmailTemplatesMaster<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
        ? getGetSetupV1LocationsIdEmailTemplatesMasterKey(args)
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
                (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
          client.setup.v1.locations[':id'].email.templates.master.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsIdEmailTemplatesMaster<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
        ? getGetSetupV1LocationsIdEmailTemplatesMasterKey(args)
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
                (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$get']
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
          client.setup.v1.locations[':id'].email.templates.master.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1LocationsIdEmailTemplatesMasterKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', 'POST'] as const
}

export function usePostSetupV1LocationsIdEmailTemplatesMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsIdEmailTemplatesMasterKey()
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
            (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$post']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].email.templates.master.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdEmailTemplatesMasterKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/master', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdEmailTemplatesMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdEmailTemplatesMasterKey()
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
            (typeof client.setup.v1.locations)[':id']['email']['templates']['master']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].email.templates.master.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdEmailTemplatesTemplateNameKey(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
) {
  return ['setup', '/setup/v1/locations/:id/email/templates/:templateName', args] as const
}

export function useGetSetupV1LocationsIdEmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
        ? getGetSetupV1LocationsIdEmailTemplatesTemplateNameKey(args)
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
                (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
          client.setup.v1.locations[':id'].email.templates[':templateName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsIdEmailTemplatesTemplateName<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
        ? getGetSetupV1LocationsIdEmailTemplatesTemplateNameKey(args)
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
                (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$get']
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
          client.setup.v1.locations[':id'].email.templates[':templateName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameKey() {
  return ['setup', '/setup/v1/locations/:id/email/templates/:templateName', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdEmailTemplatesTemplateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdEmailTemplatesTemplateNameKey()
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
            (typeof client.setup.v1.locations)[':id']['email']['templates'][':templateName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].email.templates[':templateName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1LocationsIdGoogleServiceAccountKey() {
  return ['setup', '/setup/v1/locations/:id/google/service/account', 'POST'] as const
}

export function usePostSetupV1LocationsIdGoogleServiceAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsIdGoogleServiceAccountKey()
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
            (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].google.service.account.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdGoogleServiceAccountKey() {
  return ['setup', '/setup/v1/locations/:id/google/service/account', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdGoogleServiceAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdGoogleServiceAccountKey()
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
            (typeof client.setup.v1.locations)[':id']['google']['service']['account']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].google.service.account.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1LocationsIdHolidaysHolidayIdClosedKey() {
  return ['setup', '/setup/v1/locations/:id/holidays/:holidayId/:closed', 'PUT'] as const
}

export function usePutSetupV1LocationsIdHolidaysHolidayIdClosed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1LocationsIdHolidaysHolidayIdClosedKey()
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
            (typeof client.setup.v1.locations)[':id']['holidays'][':holidayId'][':closed']['$put']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].holidays[':holidayId'][':closed'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1LocationsIdRecoverKey() {
  return ['setup', '/setup/v1/locations/:id/recover', 'PUT'] as const
}

export function usePutSetupV1LocationsIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1LocationsIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['recover']['$put']> },
      ) => parseResponse(client.setup.v1.locations[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1LocationsIdServicesKey(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
) {
  return ['setup', '/setup/v1/locations/:id/services', args] as const
}

export function useGetSetupV1LocationsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1LocationsIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1LocationsIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.locations[':id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1LocationsIdServicesKey() {
  return ['setup', '/setup/v1/locations/:id/services', 'POST'] as const
}

export function usePostSetupV1LocationsIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsIdServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$post']>
        },
      ) => parseResponse(client.setup.v1.locations[':id'].services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1LocationsIdServicesKey() {
  return ['setup', '/setup/v1/locations/:id/services', 'DELETE'] as const
}

export function useDeleteSetupV1LocationsIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1LocationsIdServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['services']['$delete']>
        },
      ) => parseResponse(client.setup.v1.locations[':id'].services.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1LocationsIdSettingsScopeSettingsScopeKey() {
  return ['setup', '/setup/v1/locations/:id/settings/scope/:settingsScope', 'PUT'] as const
}

export function usePutSetupV1LocationsIdSettingsScopeSettingsScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1LocationsIdSettingsScopeSettingsScopeKey()
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
            (typeof client.setup.v1.locations)[':id']['settings']['scope'][':settingsScope']['$put']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.locations[':id'].settings.scope[':settingsScope'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1LocationsIdUploadimageKey() {
  return ['setup', '/setup/v1/locations/:id/uploadimage', 'POST'] as const
}

export function usePostSetupV1LocationsIdUploadimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1LocationsIdUploadimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.locations)[':id']['uploadimage']['$post']>
        },
      ) => parseResponse(client.setup.v1.locations[':id'].uploadimage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcegroupsKey(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
) {
  return ['setup', '/setup/v1/resourcegroups', args] as const
}

export function useGetSetupV1Resourcegroups<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resourcegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Resourcegroups<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.resourcegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resourcegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ResourcegroupsKey() {
  return ['setup', '/setup/v1/resourcegroups', 'POST'] as const
}

export function usePostSetupV1Resourcegroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resourcegroups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.resourcegroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcegroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.resourcegroups.$post> },
      ) => parseResponse(client.setup.v1.resourcegroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcegroupsIdKey(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resourcegroups/:id', args] as const
}

export function useGetSetupV1ResourcegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resourcegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resourcegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ResourcegroupsIdKey() {
  return ['setup', '/setup/v1/resourcegroups/:id', 'PUT'] as const
}

export function usePutSetupV1ResourcegroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcegroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.resourcegroups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcegroupsIdKey() {
  return ['setup', '/setup/v1/resourcegroups/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcegroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcegroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.resourcegroups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ResourcegroupsIdRecoverKey() {
  return ['setup', '/setup/v1/resourcegroups/:id/recover', 'PUT'] as const
}

export function usePutSetupV1ResourcegroupsIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcegroupsIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resourcegroups)[':id']['recover']['$put']>
        },
      ) => parseResponse(client.setup.v1.resourcegroups[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesKey(
  args: InferRequestType<typeof client.setup.v1.resources.$get>,
) {
  return ['setup', '/setup/v1/resources', args] as const
}

export function useGetSetupV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Resources<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ResourcesKey() {
  return ['setup', '/setup/v1/resources', 'POST'] as const
}

export function usePostSetupV1Resources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.resources.$post> }) =>
        parseResponse(client.setup.v1.resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesAllocationsIdKey(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/allocations/:id', args] as const
}

export function useGetSetupV1ResourcesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ResourcesAllocationsIdKey() {
  return ['setup', '/setup/v1/resources/allocations/:id', 'PUT'] as const
}

export function usePutSetupV1ResourcesAllocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesAllocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.resources.allocations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcesAllocationsIdKey() {
  return ['setup', '/setup/v1/resources/allocations/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcesAllocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcesAllocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources.allocations)[':id']['$delete']>
        },
      ) => parseResponse(client.setup.v1.resources.allocations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ResourcesBlockIdKey() {
  return ['setup', '/setup/v1/resources/block/:id', 'PUT'] as const
}

export function usePutSetupV1ResourcesBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.resources.block[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcesBlockIdKey() {
  return ['setup', '/setup/v1/resources/block/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcesBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcesBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resources.block)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.resources.block[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesBlocksIdKey(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/blocks/:id', args] as const
}

export function useGetSetupV1ResourcesBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ResourcesBulkKey() {
  return ['setup', '/setup/v1/resources/bulk', 'PUT'] as const
}

export function usePutSetupV1ResourcesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.resources.bulk.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.resources.bulk.$put> },
      ) => parseResponse(client.setup.v1.resources.bulk.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ResourcesBulkKey() {
  return ['setup', '/setup/v1/resources/bulk', 'POST'] as const
}

export function usePostSetupV1ResourcesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.resources.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.resources.bulk.$post> },
      ) => parseResponse(client.setup.v1.resources.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesTimezonesKey() {
  return ['setup', '/setup/v1/resources/timezones'] as const
}

export function useGetSetupV1ResourcesTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesTimezonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesTimezones<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesTimezonesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.resources.timezones.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources.timezones.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id', args] as const
}

export function useGetSetupV1ResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ResourcesIdKey() {
  return ['setup', '/setup/v1/resources/:id', 'PUT'] as const
}

export function usePutSetupV1ResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.resources[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcesIdKey() {
  return ['setup', '/setup/v1/resources/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.resources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdAllocationsKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/allocations', args] as const
}

export function useGetSetupV1ResourcesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ResourcesIdAllocationsKey() {
  return ['setup', '/setup/v1/resources/:id/allocations', 'POST'] as const
}

export function usePostSetupV1ResourcesIdAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesIdAllocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['allocations']['$post']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].allocations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdAvailabilityKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/availability', args] as const
}

export function useGetSetupV1ResourcesIdAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources[':id'].availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesIdAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.resources[':id'].availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ResourcesIdAvailabilityKey() {
  return ['setup', '/setup/v1/resources/:id/availability', 'PUT'] as const
}

export function usePutSetupV1ResourcesIdAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesIdAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['availability']['$put']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].availability.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ResourcesIdBlockKey() {
  return ['setup', '/setup/v1/resources/:id/block', 'POST'] as const
}

export function usePostSetupV1ResourcesIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['block']['$post']> },
      ) => parseResponse(client.setup.v1.resources[':id'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdBlocksKey(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/resources/:id/blocks', args] as const
}

export function useGetSetupV1ResourcesIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ResourcesIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.resources[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressKey(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/google/:googleEmailAddress',
    args,
  ] as const
}

export function useGetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
        ? getGetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressKey(args)
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
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
          client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
        ? getGetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressKey(args)
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
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['google'][':googleEmailAddress']['$get']
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
          client.setup.v1.resources[':id'].calendar.auth.google[':googleEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressKey(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
) {
  return [
    'setup',
    '/setup/v1/resources/:id/calendar/auth/outlook/:outlookEmailAddress',
    args,
  ] as const
}

export function useGetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
        ? getGetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressKey(args)
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
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
          client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
        ? getGetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressKey(args)
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
                (typeof client.setup.v1.resources)[':id']['calendar']['auth']['outlook'][':outlookEmailAddress']['$get']
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
          client.setup.v1.resources[':id'].calendar.auth.outlook[':outlookEmailAddress'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcesIdDeleteimageKey() {
  return ['setup', '/setup/v1/resources/:id/deleteimage', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcesIdDeleteimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcesIdDeleteimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['deleteimage']['$delete']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].deleteimage.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ResourcesIdReassignAppointmentsResourceIdKey() {
  return ['setup', '/setup/v1/resources/:id/reassign/appointments/:resourceId', 'PUT'] as const
}

export function usePutSetupV1ResourcesIdReassignAppointmentsResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesIdReassignAppointmentsResourceIdKey()
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
            (typeof client.setup.v1.resources)[':id']['reassign']['appointments'][':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.setup.v1.resources[':id'].reassign.appointments[':resourceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ResourcesIdRecoverKey() {
  return ['setup', '/setup/v1/resources/:id/recover', 'PUT'] as const
}

export function usePutSetupV1ResourcesIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['recover']['$put']> },
      ) => parseResponse(client.setup.v1.resources[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ResourcesIdServicesKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'PUT'] as const
}

export function usePutSetupV1ResourcesIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ResourcesIdServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$put']> },
      ) => parseResponse(client.setup.v1.resources[':id'].services.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ResourcesIdServicesKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'POST'] as const
}

export function usePostSetupV1ResourcesIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesIdServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$post']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ResourcesIdServicesKey() {
  return ['setup', '/setup/v1/resources/:id/services', 'DELETE'] as const
}

export function useDeleteSetupV1ResourcesIdServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ResourcesIdServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['services']['$delete']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].services.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ResourcesIdUploadimageKey() {
  return ['setup', '/setup/v1/resources/:id/uploadimage', 'POST'] as const
}

export function usePostSetupV1ResourcesIdUploadimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ResourcesIdUploadimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.resources)[':id']['uploadimage']['$post']>
        },
      ) => parseResponse(client.setup.v1.resources[':id'].uploadimage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicegroupsKey(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
) {
  return ['setup', '/setup/v1/servicegroups', args] as const
}

export function useGetSetupV1Servicegroups<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.servicegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Servicegroups<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.servicegroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicegroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.servicegroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ServicegroupsKey() {
  return ['setup', '/setup/v1/servicegroups', 'POST'] as const
}

export function usePostSetupV1Servicegroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.servicegroups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.servicegroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicegroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.servicegroups.$post> },
      ) => parseResponse(client.setup.v1.servicegroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicegroupsIdKey(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/servicegroups/:id', args] as const
}

export function useGetSetupV1ServicegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.servicegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicegroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicegroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.servicegroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ServicegroupsIdKey() {
  return ['setup', '/setup/v1/servicegroups/:id', 'PUT'] as const
}

export function usePutSetupV1ServicegroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicegroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.servicegroups[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ServicegroupsIdKey() {
  return ['setup', '/setup/v1/servicegroups/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ServicegroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicegroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.servicegroups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ServicegroupsIdRecoverKey() {
  return ['setup', '/setup/v1/servicegroups/:id/recover', 'PUT'] as const
}

export function usePutSetupV1ServicegroupsIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicegroupsIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.servicegroups)[':id']['recover']['$put']>
        },
      ) => parseResponse(client.setup.v1.servicegroups[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesKey(
  args: InferRequestType<typeof client.setup.v1.services.$get>,
) {
  return ['setup', '/setup/v1/services', args] as const
}

export function useGetSetupV1Services<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1Services<TError = unknown>(
  args: InferRequestType<typeof client.setup.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ServicesKey() {
  return ['setup', '/setup/v1/services', 'POST'] as const
}

export function usePostSetupV1Services<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.services.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setup.v1.services.$post> }) =>
        parseResponse(client.setup.v1.services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesAllocationsIdKey(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/allocations/:id', args] as const
}

export function useGetSetupV1ServicesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesAllocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesAllocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services.allocations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ServicesAllocationsIdKey() {
  return ['setup', '/setup/v1/services/allocations/:id', 'PUT'] as const
}

export function usePutSetupV1ServicesAllocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicesAllocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.services.allocations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ServicesAllocationsIdKey() {
  return ['setup', '/setup/v1/services/allocations/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ServicesAllocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicesAllocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.services.allocations)[':id']['$delete']>
        },
      ) => parseResponse(client.setup.v1.services.allocations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ServicesBlockIdKey() {
  return ['setup', '/setup/v1/services/block/:id', 'PUT'] as const
}

export function usePutSetupV1ServicesBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicesBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.services.block[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ServicesBlockIdKey() {
  return ['setup', '/setup/v1/services/block/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ServicesBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.block)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicesBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.services.block)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.services.block[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesBlocksIdKey(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/blocks/:id', args] as const
}

export function useGetSetupV1ServicesBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesBlocksId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services.blocks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesBlocksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services.blocks)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services.blocks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ServicesCalendarKey() {
  return ['setup', '/setup/v1/services/calendar', 'POST'] as const
}

export function usePostSetupV1ServicesCalendar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setup.v1.services.calendar.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setup.v1.services.calendar.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesCalendarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setup.v1.services.calendar.$post> },
      ) => parseResponse(client.setup.v1.services.calendar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ServicesCalendarIdKey() {
  return ['setup', '/setup/v1/services/calendar/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ServicesCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicesCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.services.calendar)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.services.calendar[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id', args] as const
}

export function useGetSetupV1ServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesId<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ServicesIdKey() {
  return ['setup', '/setup/v1/services/:id', 'PUT'] as const
}

export function usePutSetupV1ServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.services)[':id']['$put']> },
      ) => parseResponse(client.setup.v1.services[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSetupV1ServicesIdKey() {
  return ['setup', '/setup/v1/services/:id', 'DELETE'] as const
}

export function useDeleteSetupV1ServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.setup.v1.services)[':id']['$delete']> },
      ) => parseResponse(client.setup.v1.services[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdAllocationsKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/allocations', args] as const
}

export function useGetSetupV1ServicesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesIdAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].allocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ServicesIdAllocationsKey() {
  return ['setup', '/setup/v1/services/:id/allocations', 'POST'] as const
}

export function usePostSetupV1ServicesIdAllocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesIdAllocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['$post']>
        },
      ) => parseResponse(client.setup.v1.services[':id'].allocations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ServicesIdAllocationsBulkKey() {
  return ['setup', '/setup/v1/services/:id/allocations/bulk', 'POST'] as const
}

export function usePostSetupV1ServicesIdAllocationsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesIdAllocationsBulkKey()
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
            (typeof client.setup.v1.services)[':id']['allocations']['bulk']['$post']
          >
        },
      ) =>
        parseResponse(client.setup.v1.services[':id'].allocations.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdAvailabilityKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/availability', args] as const
}

export function useGetSetupV1ServicesIdAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesIdAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].availability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSetupV1ServicesIdAvailabilityKey() {
  return ['setup', '/setup/v1/services/:id/availability', 'PUT'] as const
}

export function usePutSetupV1ServicesIdAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['availability']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicesIdAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.services)[':id']['availability']['$put']>
        },
      ) => parseResponse(client.setup.v1.services[':id'].availability.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupV1ServicesIdBlockKey() {
  return ['setup', '/setup/v1/services/:id/block', 'POST'] as const
}

export function usePostSetupV1ServicesIdBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesIdBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.services)[':id']['block']['$post']> },
      ) => parseResponse(client.setup.v1.services[':id'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdBlocksKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/blocks', args] as const
}

export function useGetSetupV1ServicesIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesIdBlocks<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['blocks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdCalendarKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/calendar', args] as const
}

export function useGetSetupV1ServicesIdCalendar<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesIdCalendar<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['calendar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setup.v1.services[':id'].calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSetupV1ServicesIdDeleteimageKey() {
  return ['setup', '/setup/v1/services/:id/deleteimage', 'DELETE'] as const
}

export function useDeleteSetupV1ServicesIdDeleteimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSetupV1ServicesIdDeleteimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.services)[':id']['deleteimage']['$delete']>
        },
      ) => parseResponse(client.setup.v1.services[':id'].deleteimage.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSetupV1ServicesIdRecoverKey() {
  return ['setup', '/setup/v1/services/:id/recover', 'PUT'] as const
}

export function usePutSetupV1ServicesIdRecover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['recover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSetupV1ServicesIdRecoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.setup.v1.services)[':id']['recover']['$put']> },
      ) => parseResponse(client.setup.v1.services[':id'].recover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSetupV1ServicesIdResourcesKey(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
) {
  return ['setup', '/setup/v1/services/:id/resources', args] as const
}

export function useGetSetupV1ServicesIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetupV1ServicesIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.setup.v1.services)[':id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSetupV1ServicesIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.setup.v1.services[':id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSetupV1ServicesIdUploadimageKey() {
  return ['setup', '/setup/v1/services/:id/uploadimage', 'POST'] as const
}

export function usePostSetupV1ServicesIdUploadimage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupV1ServicesIdUploadimageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.setup.v1.services)[':id']['uploadimage']['$post']>
        },
      ) => parseResponse(client.setup.v1.services[':id'].uploadimage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
