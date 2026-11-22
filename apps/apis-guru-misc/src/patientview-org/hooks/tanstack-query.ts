import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function usePostAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAuthLogoutToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthLogoutTokenMutationOptions<TError, TOnMutateResult>(
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

export function useAuthTokenBasicuserinformation<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAuthTokenBasicuserinformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthTokenBasicuserinformation<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAuthTokenBasicuserinformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePatientUserIdBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientUserIdBasicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientUserIdBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientUserIdBasicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePatientmanagementDiagnoses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPatientmanagementDiagnosesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePatientmanagementDiagnoses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPatientmanagementDiagnosesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePatientmanagementLookuptypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPatientmanagementLookuptypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientmanagementLookuptypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPatientmanagementLookuptypesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPatientmanagementValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPatientmanagementValidateMutationOptions<TError, TOnMutateResult>(
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

export function usePatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdMutationOptions<
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

export function usePostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesMutationOptions<
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

export function useUserUserIdAvailableobservationheadings<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUserIdAvailableobservationheadingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUserIdAvailableobservationheadings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUserIdAvailableobservationheadingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUserUserIdObservations<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUserIdObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUserIdObservations<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUserIdObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUserUserIdObservationsCode<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUserIdObservationsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUserIdObservationsCode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUserIdObservationsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUserUserIdObservationsCodePatiententered<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUserIdObservationsCodePatiententeredQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUserIdObservationsCodePatiententered<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUserIdObservationsCodePatiententeredQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUserUserIdPatiententeredobservationheadings<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUserUserIdPatiententeredobservationheadingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserUserIdPatiententeredobservationheadings<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUserUserIdPatiententeredobservationheadingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
