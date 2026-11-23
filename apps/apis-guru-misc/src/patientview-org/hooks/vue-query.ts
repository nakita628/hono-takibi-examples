import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.login.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>
  >,
) {
  return ['auth', '/auth/:token/basicuserinformation', toValue(args)] as const
}

export function getAuthTokenBasicuserinformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthTokenBasicuserinformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth[':token'].basicuserinformation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.auth)[':token']['basicuserinformation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)[':token']['basicuserinformation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthTokenBasicuserinformationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthTokenBasicuserinformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.auth[':token'].basicuserinformation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientUserIdBasicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>>,
) {
  return ['patient', '/patient/:userId/basic', toValue(args)] as const
}

export function getPatientUserIdBasicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPatientUserIdBasicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patient[':userId'].basic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePatientUserIdBasic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.patient)[':userId']['basic']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.patient)[':userId']['basic']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPatientUserIdBasicQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPatientUserIdBasicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.patient[':userId'].basic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientmanagementDiagnosesQueryKey() {
  return ['patientmanagement', '/patientmanagement/diagnoses'] as const
}

export function getPatientmanagementDiagnosesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPatientmanagementDiagnosesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patientmanagement.diagnoses.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>
              >
            >
          >,
          ReturnType<typeof getPatientmanagementDiagnosesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.diagnoses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientmanagementDiagnosesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPatientmanagementDiagnosesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.patientmanagement.diagnoses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatientmanagementLookuptypesQueryKey() {
  return ['patientmanagement', '/patientmanagement/lookuptypes'] as const
}

export function getPatientmanagementLookuptypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPatientmanagementLookuptypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patientmanagement.lookuptypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>
              >
            >
          >,
          ReturnType<typeof getPatientmanagementLookuptypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.patientmanagement.lookuptypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPatientmanagementLookuptypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPatientmanagementLookuptypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.patientmanagement.lookuptypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
    >
  >,
) {
  return [
    'patientmanagement',
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId',
    toValue(args),
  ] as const
}

export function getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.patientmanagement)[':userId']['group'][':groupId']['identifier'][':identifierId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.patientmanagement[':userId'].group[':groupId'].identifier[':identifierId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
  >,
) {
  return ['user', '/user/:userId/availableobservationheadings', toValue(args)] as const
}

export function getUserUserIdAvailableobservationheadingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdAvailableobservationheadingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].availableobservationheadings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['availableobservationheadings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user)[':userId']['availableobservationheadings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.user)[':userId']['availableobservationheadings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdAvailableobservationheadingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdAvailableobservationheadingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].availableobservationheadings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdObservationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['observations']['$get']>>,
) {
  return ['user', '/user/:userId/observations', toValue(args)] as const
}

export function getUserUserIdObservationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['observations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdObservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].observations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['observations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['observations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdObservationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdObservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].observations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdObservationsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>
  >,
) {
  return ['user', '/user/:userId/observations/:code', toValue(args)] as const
}

export function getUserUserIdObservationsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdObservationsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].observations[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['observations'][':code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user)[':userId']['observations'][':code']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdObservationsCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdObservationsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].observations[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdObservationsCodePatiententeredQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
    >
  >,
) {
  return ['user', '/user/:userId/observations/:code/patiententered', toValue(args)] as const
}

export function getUserUserIdObservationsCodePatiententeredQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdObservationsCodePatiententeredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].observations[':code'].patiententered.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user)[':userId']['observations'][':code']['patiententered']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserUserIdObservationsCodePatiententeredQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdObservationsCodePatiententeredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].observations[':code'].patiententered.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdPatiententeredobservationheadingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
  >,
) {
  return ['user', '/user/:userId/patiententeredobservationheadings', toValue(args)] as const
}

export function getUserUserIdPatiententeredobservationheadingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdPatiententeredobservationheadingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].patiententeredobservationheadings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['patiententeredobservationheadings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUserUserIdPatiententeredobservationheadingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdPatiententeredobservationheadingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].patiententeredobservationheadings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
