import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAirtravelCoordinatesKey() {
  return ['airtravelCoordinates'] as const
}

export function getAirtravelMultilegKey() {
  return ['airtravelMultileg'] as const
}

export function getEcommerceDeliveryKey() {
  return ['ecommerceDelivery'] as const
}

export function getRequestApiKeyKey() {
  return ['requestApiKey'] as const
}

export function getRoadDistanceKey() {
  return ['roadDistance'] as const
}

export function getUrbanDeliveryKey() {
  return ['urbanDelivery'] as const
}

export function getPostAirtravelCoordinatesMutationKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates', 'POST'] as const
}

export function getPostAirtravelCoordinatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.airtravelCoordinates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelCoordinates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAirtravelCoordinatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.airtravelCoordinates.$post>) {
      return parseResponse(client.airtravelCoordinates.$post(args, options))
    },
  })
}

export function injectPostAirtravelCoordinates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.airtravelCoordinates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelCoordinates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAirtravelCoordinatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelCoordinatesConfirmCarbonOffsetMutationKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmCarbonOffset', 'PATCH'] as const
}

export function getPatchAirtravelCoordinatesConfirmCarbonOffsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelCoordinatesConfirmCarbonOffsetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>,
    ) {
      return parseResponse(client.airtravelCoordinates.confirmCarbonOffset.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelCoordinatesConfirmCarbonOffset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelCoordinatesConfirmCarbonOffsetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelCoordinatesConfirmPaymentMutationKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmPayment', 'PATCH'] as const
}

export function getPatchAirtravelCoordinatesConfirmPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelCoordinatesConfirmPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch>,
    ) {
      return parseResponse(client.airtravelCoordinates.confirmPayment.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelCoordinatesConfirmPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPayment.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelCoordinatesConfirmPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelCoordinatesConfirmPlantingMutationKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmPlanting', 'PATCH'] as const
}

export function getPatchAirtravelCoordinatesConfirmPlantingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelCoordinatesConfirmPlantingMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch>,
    ) {
      return parseResponse(client.airtravelCoordinates.confirmPlanting.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelCoordinatesConfirmPlanting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPlanting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelCoordinatesConfirmPlantingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelCoordinatesConfirmTransactionMutationKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmTransaction', 'PATCH'] as const
}

export function getPatchAirtravelCoordinatesConfirmTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelCoordinatesConfirmTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch>,
    ) {
      return parseResponse(client.airtravelCoordinates.confirmTransaction.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelCoordinatesConfirmTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelCoordinates.confirmTransaction.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelCoordinatesConfirmTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAirtravelMultilegMutationKey() {
  return ['airtravelMultileg', '/airtravelMultileg', 'POST'] as const
}

export function getPostAirtravelMultilegMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.airtravelMultileg.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.airtravelMultileg.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAirtravelMultilegMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.airtravelMultileg.$post>) {
      return parseResponse(client.airtravelMultileg.$post(args, options))
    },
  })
}

export function injectPostAirtravelMultileg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.airtravelMultileg.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelMultileg.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAirtravelMultilegMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelMultilegConfirmCarbonOffsetMutationKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmCarbonOffset', 'PATCH'] as const
}

export function getPatchAirtravelMultilegConfirmCarbonOffsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelMultilegConfirmCarbonOffsetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>,
    ) {
      return parseResponse(client.airtravelMultileg.confirmCarbonOffset.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelMultilegConfirmCarbonOffset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelMultilegConfirmCarbonOffsetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelMultilegConfirmPaymentMutationKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmPayment', 'PATCH'] as const
}

export function getPatchAirtravelMultilegConfirmPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelMultilegConfirmPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch>,
    ) {
      return parseResponse(client.airtravelMultileg.confirmPayment.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelMultilegConfirmPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelMultileg.confirmPayment.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelMultilegConfirmPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelMultilegConfirmPlantingMutationKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmPlanting', 'PATCH'] as const
}

export function getPatchAirtravelMultilegConfirmPlantingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelMultilegConfirmPlantingMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch>,
    ) {
      return parseResponse(client.airtravelMultileg.confirmPlanting.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelMultilegConfirmPlanting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelMultileg.confirmPlanting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelMultilegConfirmPlantingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAirtravelMultilegConfirmTransactionMutationKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmTransaction', 'PATCH'] as const
}

export function getPatchAirtravelMultilegConfirmTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAirtravelMultilegConfirmTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch>,
    ) {
      return parseResponse(client.airtravelMultileg.confirmTransaction.$patch(args, options))
    },
  })
}

export function injectPatchAirtravelMultilegConfirmTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.airtravelMultileg.confirmTransaction.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAirtravelMultilegConfirmTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEcommerceDeliveryMutationKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery', 'POST'] as const
}

export function getPostEcommerceDeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerceDelivery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ecommerceDelivery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEcommerceDeliveryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ecommerceDelivery.$post>) {
      return parseResponse(client.ecommerceDelivery.$post(args, options))
    },
  })
}

export function injectPostEcommerceDelivery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ecommerceDelivery.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ecommerceDelivery.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEcommerceDeliveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEcommerceDeliveryConfirmCarbonOffsetMutationKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmCarbonOffset', 'PATCH'] as const
}

export function getPatchEcommerceDeliveryConfirmCarbonOffsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEcommerceDeliveryConfirmCarbonOffsetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>,
    ) {
      return parseResponse(client.ecommerceDelivery.confirmCarbonOffset.$patch(args, options))
    },
  })
}

export function injectPatchEcommerceDeliveryConfirmCarbonOffset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEcommerceDeliveryConfirmCarbonOffsetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEcommerceDeliveryConfirmPaymentMutationKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmPayment', 'PATCH'] as const
}

export function getPatchEcommerceDeliveryConfirmPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEcommerceDeliveryConfirmPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch>,
    ) {
      return parseResponse(client.ecommerceDelivery.confirmPayment.$patch(args, options))
    },
  })
}

export function injectPatchEcommerceDeliveryConfirmPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPayment.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEcommerceDeliveryConfirmPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEcommerceDeliveryConfirmPlantingMutationKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmPlanting', 'PATCH'] as const
}

export function getPatchEcommerceDeliveryConfirmPlantingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEcommerceDeliveryConfirmPlantingMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch>,
    ) {
      return parseResponse(client.ecommerceDelivery.confirmPlanting.$patch(args, options))
    },
  })
}

export function injectPatchEcommerceDeliveryConfirmPlanting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPlanting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEcommerceDeliveryConfirmPlantingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEcommerceDeliveryConfirmTransactionMutationKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmTransaction', 'PATCH'] as const
}

export function getPatchEcommerceDeliveryConfirmTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchEcommerceDeliveryConfirmTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch>,
    ) {
      return parseResponse(client.ecommerceDelivery.confirmTransaction.$patch(args, options))
    },
  })
}

export function injectPatchEcommerceDeliveryConfirmTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ecommerceDelivery.confirmTransaction.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEcommerceDeliveryConfirmTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestApiKeyMutationKey() {
  return ['requestApiKey', '/requestApiKey', 'POST'] as const
}

export function getPostRequestApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestApiKey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.requestApiKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestApiKey.$post>) {
      return parseResponse(client.requestApiKey.$post(args, options))
    },
  })
}

export function injectPostRequestApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestApiKey.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.requestApiKey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRoadDistanceMutationKey() {
  return ['roadDistance', '/roadDistance', 'POST'] as const
}

export function getPostRoadDistanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.roadDistance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoadDistanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roadDistance.$post>) {
      return parseResponse(client.roadDistance.$post(args, options))
    },
  })
}

export function injectPostRoadDistance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.roadDistance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRoadDistanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRoadDistanceConfirmCarbonOffsetMutationKey() {
  return ['roadDistance', '/roadDistance/confirmCarbonOffset', 'PATCH'] as const
}

export function getPatchRoadDistanceConfirmCarbonOffsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.roadDistance.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoadDistanceConfirmCarbonOffsetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch>,
    ) {
      return parseResponse(client.roadDistance.confirmCarbonOffset.$patch(args, options))
    },
  })
}

export function injectPatchRoadDistanceConfirmCarbonOffset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.roadDistance.confirmCarbonOffset.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoadDistanceConfirmCarbonOffsetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRoadDistanceConfirmPaymentMutationKey() {
  return ['roadDistance', '/roadDistance/confirmPayment', 'PATCH'] as const
}

export function getPatchRoadDistanceConfirmPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.confirmPayment.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.roadDistance.confirmPayment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoadDistanceConfirmPaymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roadDistance.confirmPayment.$patch>) {
      return parseResponse(client.roadDistance.confirmPayment.$patch(args, options))
    },
  })
}

export function injectPatchRoadDistanceConfirmPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.roadDistance.confirmPayment.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.roadDistance.confirmPayment.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoadDistanceConfirmPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRoadDistanceConfirmPlantingMutationKey() {
  return ['roadDistance', '/roadDistance/confirmPlanting', 'PATCH'] as const
}

export function getPatchRoadDistanceConfirmPlantingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.confirmPlanting.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.roadDistance.confirmPlanting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoadDistanceConfirmPlantingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roadDistance.confirmPlanting.$patch>) {
      return parseResponse(client.roadDistance.confirmPlanting.$patch(args, options))
    },
  })
}

export function injectPatchRoadDistanceConfirmPlanting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.roadDistance.confirmPlanting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.roadDistance.confirmPlanting.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoadDistanceConfirmPlantingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchRoadDistanceConfirmTransactionMutationKey() {
  return ['roadDistance', '/roadDistance/confirmTransaction', 'PATCH'] as const
}

export function getPatchRoadDistanceConfirmTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.roadDistance.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.roadDistance.confirmTransaction.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchRoadDistanceConfirmTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roadDistance.confirmTransaction.$patch>) {
      return parseResponse(client.roadDistance.confirmTransaction.$patch(args, options))
    },
  })
}

export function injectPatchRoadDistanceConfirmTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.roadDistance.confirmTransaction.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.roadDistance.confirmTransaction.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRoadDistanceConfirmTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUrbanDeliveryMutationKey() {
  return ['urbanDelivery', '/urbanDelivery', 'POST'] as const
}

export function getPostUrbanDeliveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.urbanDelivery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.urbanDelivery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUrbanDeliveryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.urbanDelivery.$post>) {
      return parseResponse(client.urbanDelivery.$post(args, options))
    },
  })
}

export function injectPostUrbanDelivery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.urbanDelivery.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.urbanDelivery.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUrbanDeliveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUrbanDeliveryConfirmCarbonOffsetMutationKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmCarbonOffset', 'PATCH'] as const
}

export function getPatchUrbanDeliveryConfirmCarbonOffsetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUrbanDeliveryConfirmCarbonOffsetMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>,
    ) {
      return parseResponse(client.urbanDelivery.confirmCarbonOffset.$patch(args, options))
    },
  })
}

export function injectPatchUrbanDeliveryConfirmCarbonOffset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUrbanDeliveryConfirmCarbonOffsetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUrbanDeliveryConfirmPaymentMutationKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmPayment', 'PATCH'] as const
}

export function getPatchUrbanDeliveryConfirmPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.urbanDelivery.confirmPayment.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUrbanDeliveryConfirmPaymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch>) {
      return parseResponse(client.urbanDelivery.confirmPayment.$patch(args, options))
    },
  })
}

export function injectPatchUrbanDeliveryConfirmPayment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.urbanDelivery.confirmPayment.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUrbanDeliveryConfirmPaymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUrbanDeliveryConfirmPlantingMutationKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmPlanting', 'PATCH'] as const
}

export function getPatchUrbanDeliveryConfirmPlantingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUrbanDeliveryConfirmPlantingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch>) {
      return parseResponse(client.urbanDelivery.confirmPlanting.$patch(args, options))
    },
  })
}

export function injectPatchUrbanDeliveryConfirmPlanting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.urbanDelivery.confirmPlanting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUrbanDeliveryConfirmPlantingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUrbanDeliveryConfirmTransactionMutationKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmTransaction', 'PATCH'] as const
}

export function getPatchUrbanDeliveryConfirmTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUrbanDeliveryConfirmTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch>,
    ) {
      return parseResponse(client.urbanDelivery.confirmTransaction.$patch(args, options))
    },
  })
}

export function injectPatchUrbanDeliveryConfirmTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.urbanDelivery.confirmTransaction.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUrbanDeliveryConfirmTransactionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
