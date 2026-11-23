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

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
    >
  >,
) {
  return ['crm', '/crm/property-validations/2026-09/:objectTypeId', toValue(args)] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPropertyValidations202609ObjectTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdQueryKey>
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
              (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmPropertyValidations202609ObjectTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName',
    toValue(args),
  ] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey>
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
              (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmPropertyValidations202609ObjectTypeIdPropertyNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
    >
  >,
) {
  return [
    'crm',
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName/rule-type/:ruleType',
    toValue(args),
  ] as const
}

export function getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
          'rule-type'
        ][':ruleType'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
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
                    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
            'rule-type'
          ][':ruleType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
