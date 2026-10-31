import { createRoute, z } from '@hono/zod-openapi'

const AutocompletePlacesSchema = z.any().openapi('AutocompletePlaces')

const AutocompletePlacesDetailsSchema = z.any().openapi('AutocompletePlacesDetails')

const CancelRideSchema = z.any().openapi('CancelRide')

const CancelFeeSchema = z.any().openapi('CancelFee')

const CatchementAreaSchema = z.any().openapi('CatchementArea')

const CollectionOfCatchementAreasSchema = z.any().openapi('CollectionOfCatchementAreas')

const CollectionOfProductsSchema = z.any().openapi('CollectionOfProducts')

const CreditCardSchema = z.any().openapi('CreditCard')

const CurrentUserSchema = z.any().openapi('CurrentUser')

const EndpointSchema = z.any().openapi('Endpoint')

const EstimateRideSchema = z.any().openapi('EstimateRide')

const ForgetPasswordSchema = z.any().openapi('ForgetPassword')

const LoginSchema = z.any().openapi('Login')

const PasswordSchema = z.any().openapi('Password')

const PaymentMethodsSchema = z.any().openapi('PaymentMethods')

const ProductSchema = z.any().openapi('Product')

const RegisterSchema = z.any().openapi('Register')

const ReserveRideSchema = z.any().openapi('ReserveRide')

const SettingsSchema = z.any().openapi('Settings')

const UserCreditCardsSchema = z.any().openapi('UserCreditCards')

const UserPromotionalCodesSchema = z.any().openapi('UserPromotionalCodes')

const UserRideSchema = z.any().openapi('UserRide')

const UserRidesSchema = z.any().openapi('UserRides')

const VersionSchema = z.any().openapi('Version')

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['EcoTa.co API Root'],
  summary: 'Retrieve the version API',
  operationId: 'Retrieve the version API',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Get current user',
  operationId: 'Get current user',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAccountsRoute = createRoute({
  method: 'put',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Update User',
  operationId: 'Update User',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Create a new account with an application key',
  operationId: 'Create a new account with an application key',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
})

export const postAccountsPasswordRoute = createRoute({
  method: 'post',
  path: '/accounts/password',
  tags: ['Accounts'],
  summary: 'Forget password with email',
  operationId: 'Forget password with email',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 201: { description: 'Created', headers: z.object({}) } },
})

export const getAccountsPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/accounts/payment_methods',
  tags: ['Accounts'],
  summary: 'Payment Methods',
  operationId: 'Payment Methods',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAccountsSettingsRoute = createRoute({
  method: 'post',
  path: '/accounts/settings',
  tags: ['Accounts'],
  summary: 'Settings',
  operationId: 'Settings',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAccountsSignInRoute = createRoute({
  method: 'post',
  path: '/accounts/sign_in',
  tags: ['Accounts'],
  summary: 'Login with email, password and application key',
  operationId: 'Login with email, password and application key',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAccountsUpdatePasswordRoute = createRoute({
  method: 'put',
  path: '/accounts/update_password',
  tags: ['Accounts'],
  summary: 'Update Password',
  operationId: 'Update Password',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAddressesPlacesAutocompleteRoute = createRoute({
  method: 'post',
  path: '/addresses/places_autocomplete',
  tags: ['Adresses'],
  summary: 'Get autocomplete places',
  description:
    'For searching places just send the following attributes :\n\n- **longitude** (optional, float) : The location longitude for the seach\n\n- **latitude** (optional, float) : The location latitude for the seach\n\n- **search** (required, string) : The search text (most than 3 char)',
  operationId: 'Get autocomplete places',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postAddressesPlacesDetailsRoute = createRoute({
  method: 'post',
  path: '/addresses/places_details',
  tags: ['Adresses'],
  summary: 'Get autocomplete places details',
  operationId: 'Get autocomplete places details',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getCatchementAreasRoute = createRoute({
  method: 'get',
  path: '/catchement_areas',
  tags: ['Catchement Areas'],
  summary: 'List all catchement areas',
  operationId: 'List all catchement areas',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getCatchementAreasIdRoute = createRoute({
  method: 'get',
  path: '/catchement_areas/{id}',
  tags: ['Catchement Areas'],
  summary: 'Get a Catchement Area',
  operationId: 'Get a Catchement Area',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of the Catchement Area',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getCreditCardsRoute = createRoute({
  method: 'get',
  path: '/credit_cards',
  tags: ['CreditCards'],
  summary: 'List all CreditCards for the current User',
  operationId: 'List all CreditCards for the current User',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getCreditCardsIdRoute = createRoute({
  method: 'get',
  path: '/credit_cards/{id}',
  tags: ['CreditCards'],
  summary: 'Get a CreditCard',
  operationId: 'Get a CreditCard',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of the Credit Card',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'List all products',
  operationId: 'List all products',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getProductsIdRoute = createRoute({
  method: 'get',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Get a Product',
  operationId: 'Get a Product',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of the Product',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPromotionalCodesRoute = createRoute({
  method: 'get',
  path: '/promotional_codes',
  tags: ['Promotional Codes'],
  summary: 'Get all promotional codes for user',
  operationId: 'Get all promotional codes for user',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPromotionalCodesRoute = createRoute({
  method: 'post',
  path: '/promotional_codes',
  tags: ['Promotional Codes'],
  summary: 'Add a promotional code',
  operationId: 'Add a promotional code',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 201: { description: 'Created', headers: z.object({}) } },
})

export const getRidesIdRoute = createRoute({
  method: 'get',
  path: '/rides/{id}',
  tags: ['Rides'],
  summary: 'Get a ride',
  operationId: 'Get a ride',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of Ride',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRidesIdCancelRoute = createRoute({
  method: 'get',
  path: '/rides/{id}/cancel',
  tags: ['Rides'],
  summary: 'Cancel a Ride',
  description: '**Must be authenticate**',
  operationId: 'Cancel a Ride',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of Ride',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRidesIdCancelFeesRoute = createRoute({
  method: 'get',
  path: '/rides/{id}/cancel_fees',
  tags: ['Rides'],
  summary: 'Cancel fee of a Ride',
  description: '**Must be authenticate**',
  operationId: 'Cancel fee of a Ride',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of Ride',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRidesIdEstimateRoute = createRoute({
  method: 'get',
  path: '/rides/{id}/estimate',
  tags: ['Rides'],
  summary: 'Estimate a ride',
  operationId: 'Estimate a ride',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of Ride',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postRidesIdReserveRoute = createRoute({
  method: 'post',
  path: '/rides/{id}/reserve',
  tags: ['Rides'],
  summary: 'Reserve a ride',
  description:
    'To book, the ride must belong to the connected user. The ride must have a main passenger at least, the booking user id and the payment hash must be set.\n\n**Must be authenticate**',
  operationId: 'Reserve a ride',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Numeric `id` of Ride',
            example: '1',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRidesPagePagePerPagePerPageRoute = createRoute({
  method: 'get',
  path: '/rides?page={page}&per_page={per_page}',
  tags: ['Rides'],
  summary: 'Get all user rides',
  operationId: 'Get all user rides',
  request: {
    params: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Number of the page to load',
            example: '1',
            in: 'path',
            name: 'page',
            required: true,
            schema: { type: 'number' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Number of items per page to load',
            example: '1',
            in: 'path',
            name: 'per_page',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      headers: z.object({
        'Current-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Per-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Total-Entries': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Total-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postRidesPagePagePerPagePerPageRoute = createRoute({
  method: 'post',
  path: '/rides?page={page}&per_page={per_page}',
  tags: ['Rides'],
  summary: 'Create a ride',
  operationId: 'Create a ride',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. application/json',
            example: 'application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Language': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. en',
            example: 'en',
            in: 'header',
            name: 'Accept-Language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/{version}',
  tags: ['EcoTa.co API Root'],
  summary: 'Retrieve the Entry Point on Version',
  operationId: 'Retrieve the Entry Point on Version',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: {
            description: 'Ecotaco API version',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
