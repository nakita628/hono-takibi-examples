import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2CompaniesCompanyIdCodesCodeResourceKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/codes/:codeResource', args] as const
}

export function useGetV2CompaniesCompanyIdCodesCodeResource<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdCodesCodeResourceKey(args)
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
                (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].codes[':codeResource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdCodesCodeResource<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdCodesCodeResourceKey(args)
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
                (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].codes[':codeResource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdCustomfieldsCategoryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/customfields/:category', args] as const
}

export function useGetV2CompaniesCompanyIdCustomfieldsCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdCustomfieldsCategoryKey(args)
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
                (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].customfields[':category'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdCustomfieldsCategory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdCustomfieldsCategoryKey(args)
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
                (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].customfields[':category'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CompaniesCompanyIdEmployeesKey() {
  return ['v2', '/v2/companies/:companyId/employees', 'POST'] as const
}

export function usePostV2CompaniesCompanyIdEmployees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['employees']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CompaniesCompanyIdEmployeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>
        },
      ) => parseResponse(client.v2.companies[':companyId'].employees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesIndexKey(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
) {
  return ['v2', '/v2/companies/:companyId/employees/', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.companies[':companyId'].employees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.companies[':companyId'].employees.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2CompaniesCompanyIdEmployeesEmployeeIdKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId', 'PATCH'] as const
}

export function usePatchV2CompaniesCompanyIdEmployeesEmployeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CompaniesCompanyIdEmployeesEmployeeIdKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/additionalRates', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].additionalRates.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/benefitSetup', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].benefitSetup.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/directDeposit', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdDirectDeposit<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdDirectDeposit<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/earnings', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/earnings', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode/:startDate',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
            ':startDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
            ':startDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateKey() {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode/:startDate',
    'DELETE',
  ] as const
}

export function useDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
            ':startDate'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/emergencyContacts', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContacts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].emergencyContacts.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes', 'POST'] as const
}

export function usePostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeKey() {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode',
    'DELETE',
  ] as const
}

export function useDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/nonprimaryStateTax', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTax<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].nonprimaryStateTax.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYear<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[
            ':year'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYear<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[
            ':year'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year/:checkDate',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
            ':checkDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
            ':checkDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYear<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[
            ':year'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYear<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[
            ':year'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year/:checkDate',
    args,
  ] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
            ':checkDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
            ':checkDate'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/primaryStateTax', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTax<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].primaryStateTax.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/sensitivedata', args] as const
}

export function useGetV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataKey(args)
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
                (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/sensitivedata', 'PUT'] as const
}

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataKey()
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
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CompaniesCompanyIdOpenapiKey(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/companies/:companyId/openapi', keyArgs] as const
}

export function useGetV2CompaniesCompanyIdOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.companies[':companyId'].openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CompaniesCompanyIdOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CompaniesCompanyIdOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.companies[':companyId'].openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CredentialsSecretsKey() {
  return ['v2', '/v2/credentials/secrets', 'POST'] as const
}

export function usePostV2CredentialsSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.credentials.secrets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.credentials.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CredentialsSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.credentials.secrets.$post> },
      ) => parseResponse(client.v2.credentials.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesKey() {
  return ['v2', '/v2/weblinkstaging/companies/:companyId/employees/newemployees', 'POST'] as const
}

export function usePostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployees<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesKey()
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
            (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.weblinkstaging.companies[':companyId'].employees.newemployees.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
