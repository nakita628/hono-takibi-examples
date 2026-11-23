import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthKey() {
  return ['auth'] as const
}

export function getPatientKey() {
  return ['patient'] as const
}

export function getPatientmanagementKey() {
  return ['patientmanagement'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPostAuthLoginKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function usePostAuthLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.login.$post> }) =>
        parseResponse(client.auth.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthLogoutTokenKey() {
  return ['auth', '/auth/logout/:token', 'DELETE'] as const
}

export function useDeleteAuthLogoutToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth.logout)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.auth.logout)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthLogoutTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.logout)[':token']['$delete']> },
      ) => parseResponse(client.auth.logout[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthTokenBasicuserinformationKey(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
) {
  return ['auth', '/auth/:token/basicuserinformation', args] as const
}

export function useGetAuthTokenBasicuserinformation<TError = unknown>(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthTokenBasicuserinformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.auth[':token'].basicuserinformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthTokenBasicuserinformation<TError = unknown>(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthTokenBasicuserinformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.auth[':token'].basicuserinformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientUserIdBasicKey(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
) {
  return ['patient', '/patient/:userId/basic', args] as const
}

export function useGetPatientUserIdBasic<TError = unknown>(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPatientUserIdBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patient[':userId'].basic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientUserIdBasic<TError = unknown>(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPatientUserIdBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patient[':userId'].basic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientmanagementDiagnosesKey() {
  return ['patientmanagement', '/patientmanagement/diagnoses'] as const
}

export function useGetPatientmanagementDiagnoses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
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
        ? getGetPatientmanagementDiagnosesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patientmanagement.diagnoses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientmanagementDiagnoses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
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
        ? getGetPatientmanagementDiagnosesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.patientmanagement.diagnoses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPatientmanagementLookuptypesKey() {
  return ['patientmanagement', '/patientmanagement/lookuptypes'] as const
}

export function useGetPatientmanagementLookuptypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
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
        ? getGetPatientmanagementLookuptypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patientmanagement.lookuptypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientmanagementLookuptypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
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
        ? getGetPatientmanagementLookuptypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.patientmanagement.lookuptypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPatientmanagementValidateKey() {
  return ['patientmanagement', '/patientmanagement/validate', 'POST'] as const
}

export function usePostPatientmanagementValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.patientmanagement.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientmanagementValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.patientmanagement.validate.$post> },
      ) => parseResponse(client.patientmanagement.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdKey(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
) {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId',
    args,
  ] as const
}

export function useGetPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<TError = unknown>(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdKey(args)
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
                (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdKey(args)
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
                (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdKey() {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId',
    'POST',
  ] as const
}

export function usePostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdKey()
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
            (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesKey() {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId/surgeries',
    'POST',
  ] as const
}

export function usePostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesKey()
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
            (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
          >
        },
      ) =>
        parseResponse(
          client.patientmanagement[':userId'].group[':groupId'].identifier[
            ':identifierId'
          ].surgeries.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdAvailableobservationheadingsKey(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
) {
  return ['user', '/user/:userId/availableobservationheadings', args] as const
}

export function useGetUserUserIdAvailableobservationheadings<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdAvailableobservationheadingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].availableobservationheadings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdAvailableobservationheadings<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdAvailableobservationheadingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].availableobservationheadings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdObservationsKey(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
) {
  return ['user', '/user/:userId/observations', args] as const
}

export function useGetUserUserIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdObservations<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdObservationsCodeKey(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
) {
  return ['user', '/user/:userId/observations/:code', args] as const
}

export function useGetUserUserIdObservationsCode<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].observations[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdObservationsCode<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].observations[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdObservationsCodePatiententeredKey(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
) {
  return ['user', '/user/:userId/observations/:code/patiententered', args] as const
}

export function useGetUserUserIdObservationsCodePatiententered<TError = unknown>(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsCodePatiententeredKey(args)
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
                (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].observations[':code'].patiententered.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdObservationsCodePatiententered<TError = unknown>(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdObservationsCodePatiententeredKey(args)
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
                (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].observations[':code'].patiententered.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdPatiententeredobservationheadingsKey(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
) {
  return ['user', '/user/:userId/patiententeredobservationheadings', args] as const
}

export function useGetUserUserIdPatiententeredobservationheadings<TError = unknown>(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdPatiententeredobservationheadingsKey(args)
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
                (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].patiententeredobservationheadings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdPatiententeredobservationheadings<TError = unknown>(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserUserIdPatiententeredobservationheadingsKey(args)
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
                (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].patiententeredobservationheadings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
