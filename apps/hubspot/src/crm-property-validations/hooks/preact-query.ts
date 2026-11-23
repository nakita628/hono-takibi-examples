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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
) {
  return ['crm', '/crm/property-validations/2026-09/:objectTypeId', args] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdQueryKey>
  >({
    queryKey: getCrmPropertyValidations202609ObjectTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPropertyValidations202609ObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdQueryKey>
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
      ...getCrmPropertyValidations202609ObjectTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPropertyValidations202609ObjectTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdQueryKey>
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
      ...getCrmPropertyValidations202609ObjectTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
) {
  return ['crm', '/crm/property-validations/2026-09/:objectTypeId/:propertyName', args] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey>
  >({
    queryKey: getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmPropertyValidations202609ObjectTypeIdPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey>
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
      ...getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPropertyValidations202609ObjectTypeIdPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey>
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
      ...getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName/rule-type/:ruleType',
    args,
  ] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey
    >
  >({
    queryKey: getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
          'rule-type'
        ][':ruleType'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey
        >
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
      ...getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey
        >
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
      ...getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeMutationKey() {
  return [
    'crm',
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName/rule-type/:ruleType',
    'PUT',
  ] as const
}

export function getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
      >,
    ) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
          'rule-type'
        ][':ruleType'].$put(args, options),
      )
    },
  })
}

export function usePutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
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
    getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeMutationOptions<
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
