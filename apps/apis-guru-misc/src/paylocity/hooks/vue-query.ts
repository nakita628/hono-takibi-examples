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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2CompaniesCompanyIdCodesCodeResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
  >,
) {
  return ['v2', '/v2/companies/:companyId/codes/:codeResource', toValue(args)] as const
}

export function getV2CompaniesCompanyIdCodesCodeResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdCodesCodeResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].codes[':codeResource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdCodesCodeResource<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
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
                    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
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
                    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdCodesCodeResourceQueryKey>
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
            ReturnType<(typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdCodesCodeResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdCodesCodeResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].codes[':codeResource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
    >
  >,
) {
  return ['v2', '/v2/companies/:companyId/customfields/:category', toValue(args)] as const
}

export function getV2CompaniesCompanyIdCustomfieldsCategoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].customfields[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdCustomfieldsCategory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
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
                    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
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
                    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey>
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
              (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdCustomfieldsCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].customfields[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2CompaniesCompanyIdEmployees<
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
                  ReturnType<(typeof client.v2.companies)[':companyId']['employees']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>,
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
  const mutationDefaults = getPostV2CompaniesCompanyIdEmployeesMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/', toValue(args)] as const
}

export function getV2CompaniesCompanyIdEmployeesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
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
                    (typeof client.v2.companies)[':companyId']['employees']['index']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesIndexQueryKey>
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
            ReturnType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdEmployeesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']>
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId', toValue(args)] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']>
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchV2CompaniesCompanyIdEmployeesEmployeeId<
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
  const mutationDefaults = getPatchV2CompaniesCompanyIdEmployeesEmployeeIdMutationOptions<
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRates<
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
    getPutV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRatesMutationOptions<
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetup<
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
  const mutationDefaults = getPutV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/directDeposit',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdDirectDeposit<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
    >
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/earnings', toValue(args)] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdEarnings<
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
  const mutationDefaults = getPutV2CompaniesCompanyIdEmployeesEmployeeIdEarningsMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCode<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/earnings/:earningCode/:startDate',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
          ':startDate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
            ':startDate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate<
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
    getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateMutationOptions<
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContacts<
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
    getPutV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
    >
  >,
) {
  return ['v2', '/v2/companies/:companyId/employees/:employeeId/localTaxes', toValue(args)] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes<
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
  const mutationDefaults = getPostV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/localTaxes/:taxCode',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode<
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
    getDeleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCodeMutationOptions<
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTax<
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
    getPutV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTaxMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[
          ':year'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYear<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[
            ':year'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/details/:year/:checkDate',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
          ':checkDate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
            ':checkDate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[
          ':year'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYear<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[
            ':year'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/paystatement/summary/:year/:checkDate',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
          ':checkDate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
            ':checkDate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTax<
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
    getPutV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxMutationOptions<
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

export function getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/companies/:companyId/employees/:employeeId/sensitivedata',
    toValue(args),
  ] as const
}

export function getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
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
                    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey>
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
              (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata<
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
    getPutV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataMutationOptions<
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

export function getV2CompaniesCompanyIdOpenapiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/companies/:companyId/openapi', keyArgs] as const
}

export function getV2CompaniesCompanyIdOpenapiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CompaniesCompanyIdOpenapiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.companies[':companyId'].openapi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CompaniesCompanyIdOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CompaniesCompanyIdOpenapiQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CompaniesCompanyIdOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CompaniesCompanyIdOpenapiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.companies[':companyId'].openapi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2CredentialsSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.credentials.secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.credentials.secrets.$post>,
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
  const mutationDefaults = getPostV2CredentialsSecretsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployees<
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
    getPostV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesMutationOptions<
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
