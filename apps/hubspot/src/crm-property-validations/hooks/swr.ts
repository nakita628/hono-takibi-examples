import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmPropertyValidations202609ObjectTypeIdKey(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
) {
  return ['crm', '/crm/property-validations/2026-09/:objectTypeId', args] as const
}

export function useGetCrmPropertyValidations202609ObjectTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPropertyValidations202609ObjectTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameKey(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
) {
  return ['crm', '/crm/property-validations/2026-09/:objectTypeId/:propertyName', args] as const
}

export function useGetCrmPropertyValidations202609ObjectTypeIdPropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPropertyValidations202609ObjectTypeIdPropertyName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeKey(
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

export function useGetCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
            'rule-type'
          ][':ruleType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeKey(args)
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
                (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
            'rule-type'
          ][':ruleType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeKey() {
  return [
    'crm',
    '/crm/property-validations/2026-09/:objectTypeId/:propertyName/rule-type/:ruleType',
    'PUT',
  ] as const
}

export function usePutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeKey()
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
            (typeof client.crm)['property-validations']['2026-09'][':objectTypeId'][':propertyName']['rule-type'][':ruleType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm['property-validations']['2026-09'][':objectTypeId'][':propertyName'][
            'rule-type'
          ][':ruleType'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
