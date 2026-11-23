import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2CompaniesCompanyIdCodesCodeResourceQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/codes/:codeResource', args] as const
}

export function getV2CompaniesCompanyIdCodesCodeResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdCodesCodeResourceQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdCodesCodeResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].codes[':codeResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdCodesCodeResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdCodesCodeResourceQueryKey>
        >
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
      ...getV2CompaniesCompanyIdCodesCodeResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/customfields/:category', args] as const
}

export function getV2CompaniesCompanyIdCustomfieldsCategoryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].customfields[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdCustomfieldsCategory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey>
        >
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
      ...getV2CompaniesCompanyIdCustomfieldsCategoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CompaniesCompanyIdEmployeesMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees', 'POST'] as const
}

export function getPostV2CompaniesCompanyIdEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['employees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CompaniesCompanyIdEmployeesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>,
    ) {
      return parseResponse(client.v2.companies[':companyId'].employees.$post(args, options))
    },
  })
}

export function createPostV2CompaniesCompanyIdEmployees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.companies)[':companyId']['employees']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CompaniesCompanyIdEmployeesMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesIndexQueryKey(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
) {
  return ['v2', '/v2/companies/:companyId/employees/', args] as const
}

export function getV2CompaniesCompanyIdEmployeesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesIndexQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.companies)[':companyId']['employees']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesIndexQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchV2CompaniesCompanyIdEmployeesEmployeeIdMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId', 'PATCH'] as const
}

export function getPatchV2CompaniesCompanyIdEmployeesEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CompaniesCompanyIdEmployeesEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].$patch(args, options),
      )
    },
  })
}

export function createPatchV2CompaniesCompanyIdEmployeesEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2CompaniesCompanyIdEmployeesEmployeeIdMutationOptions<
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

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/additionalRates', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].additionalRates.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesMutationOptions<
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

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/benefitSetup', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].benefitSetup.$put(args, options),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/directDeposit', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdDirectDeposit<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/earnings', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/earnings', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings.$put(args, options),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey
    >
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
          ':startDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey
          >
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateMutationKey() {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode/:startDate',
    'DELETE',
  ] as const
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
          ':startDate'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateMutationOptions<
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

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/emergencyContacts', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].emergencyContacts.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes', 'POST'] as const
}

export function getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$post(args, options),
      )
    },
  })
}

export function createPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
          >,
          TOnMutateResult
        >
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
      getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeMutationKey() {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode',
    'DELETE',
  ] as const
}

export function getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeMutationOptions<
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

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/nonprimaryStateTax', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].nonprimaryStateTax.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTax<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[
          ':year'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYear<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey
          >
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey
    >
  >({
    queryKey:
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
          ':checkDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey
          >
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[
          ':year'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYear<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey
          >
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey(
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey
    >
  >({
    queryKey:
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
          ':checkDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey
          >
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/primaryStateTax', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].primaryStateTax.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTax<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/sensitivedata', args] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey>
        >
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
      ...getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataMutationKey() {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/sensitivedata', 'PUT'] as const
}

export function getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
          >,
          TOnMutateResult
        >
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
      getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataMutationOptions<
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

export function getV2CompaniesCompanyIdOpenapiQueryKey(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/companies/:companyId/openapi', keyArgs] as const
}

export function getV2CompaniesCompanyIdOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdOpenapiQueryKey>
  >({
    queryKey: getV2CompaniesCompanyIdOpenapiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.companies[':companyId'].openapi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CompaniesCompanyIdOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2CompaniesCompanyIdOpenapiQueryKey>
        >
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
      ...getV2CompaniesCompanyIdOpenapiQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV2CredentialsSecretsMutationKey() {
  return ['v2', '/v2/credentials/secrets', 'POST'] as const
}

export function getPostV2CredentialsSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.credentials.secrets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.credentials.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CredentialsSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.credentials.secrets.$post>) {
      return parseResponse(client.v2.credentials.secrets.$post(args, options))
    },
  })
}

export function createPostV2CredentialsSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.credentials.secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.credentials.secrets.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CredentialsSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesMutationKey() {
  return ['v2', '/v2/weblinkstaging/companies/:companyId/employees/newemployees', 'POST'] as const
}

export function getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.weblinkstaging.companies[':companyId'].employees.newemployees.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
          >,
          TOnMutateResult
        >
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
      getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesMutationOptions<
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
