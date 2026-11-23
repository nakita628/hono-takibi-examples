import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getPostAuthLoginMutationKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function getPostAuthLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.login.$post>) {
      return parseResponse(client.auth.login.$post(args, options))
    },
  })
}

export function createPostAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAuthLogoutTokenMutationKey() {
  return ['auth', '/auth/logout/:token', 'DELETE'] as const
}

export function getDeleteAuthLogoutTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth.logout)[':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.logout)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthLogoutTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.logout)[':token']['$delete']>) {
      return parseResponse(client.auth.logout[':token'].$delete(args, options))
    },
  })
}

export function createDeleteAuthLogoutToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.logout)[':token']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.auth.logout)[':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthLogoutTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthTokenBasicuserinformationQueryKey(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
) {
  return ['auth', '/auth/:token/basicuserinformation', args] as const
}

export function getAuthTokenBasicuserinformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokenBasicuserinformationQueryKey>
  >({
    queryKey: getAuthTokenBasicuserinformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth[':token'].basicuserinformation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthTokenBasicuserinformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokenBasicuserinformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthTokenBasicuserinformationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatientUserIdBasicQueryKey(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
) {
  return ['patient', '/patient/:userId/basic', args] as const
}

export function getPatientUserIdBasicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientUserIdBasicQueryKey>
  >({
    queryKey: getPatientUserIdBasicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patient[':userId'].basic.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPatientUserIdBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientUserIdBasicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPatientUserIdBasicQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatientmanagementDiagnosesQueryKey() {
  return ['patientmanagement', '/patientmanagement/diagnoses'] as const
}

export function getPatientmanagementDiagnosesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientmanagementDiagnosesQueryKey>
  >({
    queryKey: getPatientmanagementDiagnosesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.patientmanagement.diagnoses.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPatientmanagementDiagnoses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
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
              Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientmanagementDiagnosesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPatientmanagementDiagnosesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatientmanagementLookuptypesQueryKey() {
  return ['patientmanagement', '/patientmanagement/lookuptypes'] as const
}

export function getPatientmanagementLookuptypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientmanagementLookuptypesQueryKey>
  >({
    queryKey: getPatientmanagementLookuptypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.patientmanagement.lookuptypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPatientmanagementLookuptypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
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
              Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPatientmanagementLookuptypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPatientmanagementLookuptypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPatientmanagementValidateMutationKey() {
  return ['patientmanagement', '/patientmanagement/validate', 'POST'] as const
}

export function getPostPatientmanagementValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.patientmanagement.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPatientmanagementValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.patientmanagement.validate.$post>) {
      return parseResponse(client.patientmanagement.validate.$post(args, options))
    },
  })
}

export function createPostPatientmanagementValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.patientmanagement.validate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.patientmanagement.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPatientmanagementValidateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey(
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

export function getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey>
  >({
    queryKey: getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdMutationKey() {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId',
    'POST',
  ] as const
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
      >,
    ) {
      return parseResponse(
        client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
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
                  (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesMutationKey() {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId/surgeries',
    'POST',
  ] as const
}

export function getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
      >,
    ) {
      return parseResponse(
        client.patientmanagement[':userId'].group[':groupId'].identifier[
          ':identifierId'
        ].surgeries.$post(args, options),
      )
    },
  })
}

export function createPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeries<
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
                  (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['surgeries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserUserIdAvailableobservationheadingsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
) {
  return ['user', '/user/:userId/availableobservationheadings', args] as const
}

export function getUserUserIdAvailableobservationheadingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdAvailableobservationheadingsQueryKey>
  >({
    queryKey: getUserUserIdAvailableobservationheadingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].availableobservationheadings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdAvailableobservationheadings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['availableobservationheadings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdAvailableobservationheadingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdAvailableobservationheadingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdObservationsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
) {
  return ['user', '/user/:userId/observations', args] as const
}

export function getUserUserIdObservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdObservationsQueryKey>
  >({
    queryKey: getUserUserIdObservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].observations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdObservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['observations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdObservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdObservationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdObservationsCodeQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
) {
  return ['user', '/user/:userId/observations/:code', args] as const
}

export function getUserUserIdObservationsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdObservationsCodeQueryKey>
  >({
    queryKey: getUserUserIdObservationsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].observations[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdObservationsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdObservationsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdObservationsCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdObservationsCodePatiententeredQueryKey(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
) {
  return ['user', '/user/:userId/observations/:code/patiententered', args] as const
}

export function getUserUserIdObservationsCodePatiententeredQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserUserIdObservationsCodePatiententeredQueryKey>
  >({
    queryKey: getUserUserIdObservationsCodePatiententeredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].observations[':code'].patiententered.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdObservationsCodePatiententered<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserUserIdObservationsCodePatiententeredQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdObservationsCodePatiententeredQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserUserIdPatiententeredobservationheadingsQueryKey(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
) {
  return ['user', '/user/:userId/patiententeredobservationheadings', args] as const
}

export function getUserUserIdPatiententeredobservationheadingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPatiententeredobservationheadingsQueryKey>
  >({
    queryKey: getUserUserIdPatiententeredobservationheadingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].patiententeredobservationheadings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserUserIdPatiententeredobservationheadings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['patiententeredobservationheadings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUserUserIdPatiententeredobservationheadingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdPatiententeredobservationheadingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
