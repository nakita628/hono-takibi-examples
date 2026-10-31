import { createRoute, z } from '@hono/zod-openapi'

const ApiKeyAuthSecurityScheme = {
  description:
    'An [API key](#overview--api-key) is required to benefit from [higher API limits](#overview--api-limits).\n',
  in: 'header',
  name: 'X-API-Key',
  type: 'apiKey',
}

export const postAssetsAnalysisAbsorptionRatioRoute = createRoute({
  method: 'post',
  path: '/assets/analysis/absorption-ratio',
  tags: ['Assets / Analysis'],
  summary: 'Absorption Ratio',
  description:
    'Compute the absorption ratio associated to a universe of assets.\n\nReferences\n* [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(1).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsCovarianceMatrixEigenvectors: z
                .object({
                  eigenvectorsRetained: z
                    .int()
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Compute the absorption ratio of 2 assets',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [9, 1],
                  [1, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsAbsorptionRatio: z
                .number()
                .openapi({ description: 'The absorption ratio of the universe of assets' }),
            })
            .openapi({ required: ['assetsAbsorptionRatio'] }),
          examples: {
            Example: {
              description: 'Computed absorption ratio of 2 assets',
              value: { assetsAbsorptionRatio: 0.9123105625617661 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsAnalysisTurbulenceIndexRoute = createRoute({
  method: 'post',
  path: '/assets/analysis/turbulence-index',
  tags: ['Assets / Analysis'],
  summary: 'Turbulence Index',
  description:
    'Compute the turbulence index associated to a universe of assets.\n\nReferences\n* [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)\n* [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(1).openapi({ description: 'The number of assets' }),
              assetsAverageReturns: z
                .array(z.number())
                .min(2)
                .openapi({
                  description:
                    'assetsAverageReturns[i] is the average return of asset i over an historical reference period',
                }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j over an historical reference period',
                }),
              assetsReturns: z
                .array(z.number())
                .min(2)
                .openapi({
                  description:
                    'assetsReturns[i] is the return of asset i over a period different from the historical reference period',
                }),
            })
            .openapi({
              required: [
                'assets',
                'assetsCovarianceMatrix',
                'assetsAverageReturns',
                'assetsReturns',
              ],
            }),
          examples: {
            Example: {
              description: 'Compute the turbulence index of 2 assets',
              value: {
                assets: 2,
                assetsAverageReturns: [1, 1],
                assetsCovarianceMatrix: [
                  [9, 1],
                  [1, 1],
                ],
                assetsReturns: [1, 0],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsTurbulenceIndex: z
                .number()
                .openapi({ description: 'the turbulence index of the universe of assets' }),
            })
            .openapi({ required: ['assetsTurbulenceIndex'] }),
          examples: {
            Example: {
              description: 'Computed turbulence index of 2 assets',
              value: { assetsTurbulenceIndex: 0.5624999999999999 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix',
  description:
    'Compute the Pearson asset correlation matrix from either:  \n* The asset returns\n* The asset covariance matrix\n\nReferences\n* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length',
                          }),
                      })
                      .openapi({ required: ['assetReturns'] }),
                  )
                  .min(2),
              })
              .openapi({ required: ['assets'] }),
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
              })
              .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          ]),
          examples: {
            'From covariance matrix': {
              description:
                'Computes the correlation matrix of 2 assets based on their covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.01, -0.0025],
                  [-0.0025, 0.0025],
                ],
              },
            },
            'From returns': {
              description:
                'Computes the correlation matrix of 2 assets based on 4 returns per asset',
              value: {
                assets: [
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Computed correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.5],
                  [0.5, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixBoundsRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/bounds',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Bounds',
  description:
    'Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.\n \n References\n * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              assetsGroup: z
                .array(z.int().min(1))
                .min(2)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .openapi({
                  description:
                    'assetsGroup[k] is the indexes of the assets belonging to the assets group',
                }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix', 'assetsGroup'] }),
          examples: {
            Example: {
              description:
                'Compute the lower and upper bounds of a 4x4 correlation matrix associated to the group of the 3 last assets',
              value: {
                assets: 4,
                assetsCorrelationMatrix: [
                  [1, -0.55, -0.15, -0.1],
                  [-0.55, 1, 0.4, 0.3],
                  [-0.15, 0.4, 1, 0.5],
                  [-0.1, 0.3, 0.5, 1],
                ],
                assetsGroup: [2, 3, 4],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrixLowerBounds: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrixLowerBounds[i][j] is the lower bound of the correlation between the asset i and the asset j',
                }),
              assetsCorrelationMatrixUpperBounds: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrixUpperBounds[i][j] is the upper bound of the correlation between the asset i and the asset j',
                }),
            })
            .openapi({
              required: [
                'assetsCorrelationMatrixLowerBounds',
                'assetsCorrelationMatrixUpperBounds',
              ],
            }),
          examples: {
            Example: {
              description:
                'Computed lower and upper bounds of a 3x3 correlation matrix associated to the group of the last 2 assets',
              value: {
                assetsCorrelationMatrixLowerBounds: [
                  [1, 0.5, 0.5, 0],
                  [0.5, 1, 0.5, 0.3],
                  [0.5, 0.5, 1, -0.6659],
                  [0, 0.3, -0.6659, 1],
                ],
                assetsCorrelationMatrixUpperBounds: [
                  [1, 0.5, 0.5, 0],
                  [0.5, 1, 0.5, 0.3],
                  [0.5, 0.5, 1, 0.8659],
                  [0, 0.3, 0.8659, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixDenoisedRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/denoised',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Denoised Correlation Matrix',
  description:
    'Compute a denoised asset correlation matrix, using one of the following methods:\n * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory\n \n References\n * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              assetsCorrelationMatrixAspectRatio: z
                .number()
                .positive()
                .openapi({
                  description:
                    'The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix',
                }),
              denoisingMethod: z
                .literal('eigenvaluesClipping')
                .default('eigenvaluesClipping')
                .exactOptional()
                .openapi({
                  description: 'The method used to denoise the asset correlation matrix',
                }),
            })
            .openapi({
              required: ['assets', 'assetsCorrelationMatrix', 'assetsCorrelationMatrixAspectRatio'],
            }),
          examples: {
            Example: {
              description: 'Denoise an asset correlation matrix of 3 assets',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                assetsCorrelationMatrixAspectRatio: 0.5,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; assetsCorrelationMatrix is possibly null in case the denoising method did not manage to denoise the provided asset correlation matrix',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Denoised correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.6838346015086407, 0.7246659534718176],
                  [0.6838346015086407, 1, 0.6978824315038066],
                  [0.7246659534718176, 0.6978824315038066, 1],
                ],
              },
            },
            'Example of failing denoising method': {
              description: 'No denoised correlation matrix',
              value: { assetsCorrelationMatrix: null },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixDistanceRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/distance',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Distance',
  description:
    'Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:\n* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)\n* Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices\n* Bures distance, defined in the second reference\n\n References\n * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)\n * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              distanceMetric: z
                .enum(['euclidean', 'correlationMatrix', 'bures'])
                .default('euclidean')
                .exactOptional()
                .openapi({
                  description:
                    'The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix',
                }),
              referenceCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j',
                }),
            })
            .openapi({
              required: ['assets', 'assetsCorrelationMatrix', 'referenceCorrelationMatrix'],
            }),
          examples: {
            'Example (correlation matrix distance)': {
              description:
                'Compute the correlation matrix distance between an asset correlation matrix and an equicorrelation matrix',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                distanceMetric: 'correlationMatrix',
                referenceCorrelationMatrix: [
                  [1, 1, 1],
                  [1, 1, 1],
                  [1, 1, 1],
                ],
              },
            },
            'Example (euclidean distance)': {
              description:
                'Compute the euclidean distance between an asset correlation matrix and an equicorrelation matrix',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                referenceCorrelationMatrix: [
                  [1, 1, 1],
                  [1, 1, 1],
                  [1, 1, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrixDistance: z
                .number()
                .min(0)
                .openapi({
                  description: 'The computed distance between the two correlation matrices',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrixDistance'] }),
          examples: {
            Example: {
              description: 'Computed distance',
              value: { assetsCorrelationMatrixDistance: 0.8366600265340757 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixEffectiveRankRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/effective-rank',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Effective Rank',
  description:
    'Compute the effective rank of an asset correlation matrix.\n\nReferences\n* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Compute the effective rank of a correlation matrix of 2 assets',
              value: {
                assets: 2,
                assetsCorrelationMatrix: [
                  [1, 0],
                  [0, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrixEffectiveRank: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({ description: 'The effective rank of the asset correlation matrix' }),
            })
            .openapi({ required: ['assetsCorrelationMatrixEffectiveRank'] }),
          examples: {
            Example: {
              description: 'Computed effective rank',
              value: { assetsCorrelationMatrixEffectiveRank: 2 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixInformativenessRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/informativeness',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Informativeness',
  description:
    'Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:\n* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)\n* Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices\n* Bures distance, defined in the third reference\n\n References\n * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)\n * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)\n * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              distanceMetric: z
                .enum(['euclidean', 'correlationMatrix', 'bures'])
                .default('euclidean')
                .exactOptional()
                .openapi({
                  description:
                    'The distance metric to use to compute the informativeness of the asset correlation matrix',
                }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix'] }),
          examples: {
            'Example (Bures distance)': {
              description:
                'Compute the informativeness of an asset correlation matrix usingn the Bures distance',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                distanceMetric: 'bures',
              },
            },
            'Example (euclidean distance)': {
              description:
                'Compute the informativeness of an asset correlation matrix usingn the euclidean distance',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrixInformativeness: z
                .number()
                .min(0)
                .openapi({ description: 'The informativeness of the asset correlation matrix' }),
            })
            .openapi({ required: ['assetsCorrelationMatrixInformativeness'] }),
          examples: {
            Example: {
              description: 'Computed informativeness',
              value: { assetsCorrelationMatrixInformativeness: 0.020539611658192996 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixNearestRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/nearest',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Nearest Correlation Matrix',
  description:
    'Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.\n\nReferences\n* [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsApproximateCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j',
                }),
              assetsFixedCorrelations: z
                .array(z.array(z.int()).length(2))
                .exactOptional()
                .openapi({
                  description:
                    'assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed',
                }),
            })
            .openapi({ required: ['assets', 'assetsApproximateCorrelationMatrix'] }),
          examples: {
            'Nearest correlation matrix': {
              description:
                'Compute the nearest correlation matrix to an approximate correlation matrix',
              value: {
                assets: 3,
                assetsApproximateCorrelationMatrix: [
                  [1, 1, 0],
                  [1, 1, 1],
                  [0, 1, 1],
                ],
              },
            },
            'Nearest correlation matrix with fixed a correlation': {
              description:
                'Compute the nearest correlation matrix to an approximate correlation matrix, keeping one correlation coefficient fixed',
              value: {
                assets: 3,
                assetsApproximateCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, -0.2],
                  [0.9, -0.2, 1],
                ],
                assetsFixedCorrelations: [[2, 3]],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            'Nearest correlation matrix': {
              description: 'Computed nearest correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.7606306078350177, 0.15733356650676536],
                  [0.7606306078350177, 1, 0.7606306078350177],
                  [0.15733356650676536, 0.7606306078350177, 1],
                ],
              },
            },
            'Nearest correlation matrix with fixed a correlation': {
              description:
                'Computed nearest correlation matrix keeping one correlation coefficient fixed',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.4314569968899409, 0.7974943959465133],
                  [0.4314569968899409, 1, -0.2],
                  [0.7974943959465133, -0.2, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixRandomRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/random',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Random Correlation Matrix',
  description:
    'Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.\n\nReferences\n* [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ assets: z.int().min(2).openapi({ description: 'The number of assets' }) })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: { description: 'Generate a 2x2 correlation matrix', value: { assets: 2 } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Computed random correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.7606306078350177, 0.15733356650676536],
                  [0.7606306078350177, 1, 0.7606306078350177],
                  [0.15733356650676536, 0.7606306078350177, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixShrinkageRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/shrinkage',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Shrinkage',
  description:
    'Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:  \n * An equicorrelation matrix made of 1\n * An equicorrelation matrix made of 0\n * An equicorrelation matrix made of -1/(n-1), with n the number of assets\n * A provided correlation matrix\n \n References\n * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(2),
                assetsCorrelationMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                  }),
                shrinkageFactor: z
                  .number()
                  .min(0)
                  .max(1)
                  .openapi({ description: 'The shrinkage factor' }),
                targetEquicorrelationMatrix: z
                  .enum([
                    'minimumEquicorrelationMatrix',
                    'zeroEquicorrelationMatrix',
                    'maximumEquicorrelationMatrix',
                  ])
                  .openapi({ description: 'The shrinkage target correlation matrix' }),
              })
              .openapi({
                required: [
                  'assets',
                  'assetsCorrelationMatrix',
                  'targetEquicorrelationMatrix',
                  'shrinkageFactor',
                ],
              }),
            z
              .object({
                assets: z.int().min(2),
                assetsCorrelationMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                  }),
                shrinkageFactor: z.number().min(0).max(1),
                targetCorrelationMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j',
                  }),
              })
              .openapi({
                required: [
                  'assets',
                  'assetsCorrelationMatrix',
                  'targetCorrelationMatrix',
                  'shrinkageFactor',
                ],
              }),
          ]),
          examples: {
            'Shrinkage toward a provided correlation matrix': {
              description:
                'Shrinkage toward a provided correlation matrix, here the identity matrix',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                shrinkageFactor: 0.5,
                targetCorrelationMatrix: [
                  [1, 0, 0],
                  [0, 1, 0],
                  [0, 0, 1],
                ],
              },
            },
            'Shrinkage toward an equicorrelation matrix': {
              description: 'Shrinkage toward the equicorrelation matrix made of 1',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.5, 0.9],
                  [0.5, 1, 0.7],
                  [0.9, 0.7, 1],
                ],
                shrinkageFactor: 0.5,
                targetEquicorrelationMatrix: 'maximumEquicorrelationMatrix',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            Shrinkage: {
              description: 'Shrunk correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, 0.75, 0.95],
                  [0.75, 1, 0.85],
                  [0.95, 0.85, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixTheoryImpliedRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/theory-implied',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Theory-Implied Correlation Matrix',
  description:
    'Compute the theory-implied asset correlation matrix associated with:\n* A hierarchical classification of a universe of assets\n* An asset correlation matrix\n\nReferences\n* [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetHierarchicalClassification: z
                        .array(z.xor([z.string(), z.int()]))
                        .min(1)
                        .max(4)
                        .openapi({
                          description:
                            'assetHierarchicalClassification[i] is the i+1-th level of the hierarchical classification of the asset, from the most generic classification to the most specific classification; all the assetHierarchicalClassification arrays must have the same length',
                        }),
                    })
                    .openapi({ required: ['assetHierarchicalClassification'] }),
                )
                .min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              clusteringMethod: z
                .enum(['singleLinkage', 'averageLinkage', 'completeLinkage', 'wardLinkage'])
                .default('averageLinkage')
                .exactOptional()
                .openapi({ description: 'The hierarchical clustering method to use' }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix'] }),
          examples: {
            'Example (integers)': {
              description:
                'Compute the theory-implied asset correlation matrix of 2 assets, using their GICS hierarchical classification',
              value: {
                assets: [
                  { assetHierarchicalClassification: [35, 3510, 351010, 35101010] },
                  { assetHierarchicalClassification: [20, 2030, 203020, 20302010] },
                ],
                assetsCorrelationMatrix: [
                  [1, -0.00035],
                  [-0.00035, 1],
                ],
              },
            },
            'Example (strings)': {
              description:
                'Compute the theory-implied asset correlation matrix of 3 assets, using their MSCI ACWI hierarchical classification',
              value: {
                assets: [
                  { assetHierarchicalClassification: ['acwi', 'dm', 'americas'] },
                  { assetHierarchicalClassification: ['acwi', 'dm', 'americas'] },
                  { assetHierarchicalClassification: ['standalone', '', 'americas'] },
                ],
                assetsCorrelationMatrix: [
                  [1, 0.95, 0.6],
                  [0.95, 1, 0.65],
                  [0.6, 0.65, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Computed theory-implied asset correlation matrix',
              value: {
                assetsCorrelationMatrix: [
                  [1, -0.00034999999999985043],
                  [-0.00034999999999985043, 1],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCorrelationMatrixValidationRoute = createRoute({
  method: 'post',
  path: '/assets/correlation/matrix/validation',
  tags: ['Assets / Correlation Matrix'],
  summary: 'Correlation Matrix Validation',
  description:
    'Validate whether a matrix is an asset correlation matrix.\n\nReferences\n* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Validate whether the provided matrix is a correlation matrix',
              value: {
                assets: 2,
                assetsCorrelationMatrix: [
                  [1, -0.00035],
                  [-0.00035, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .enum([
                  'valid correlation matrix',
                  'invalid correlation matrix - non symmetric matrix',
                  'invalid correlation matrix - non positive diagonal elements',
                  'invalid correlation matrix - non positive semi-definite matrix',
                ])
                .openapi({
                  description: 'Indicates whether the matrix is a valid correlation matrix',
                }),
            })
            .openapi({ required: ['message'] }),
          examples: {
            Example: {
              description: 'Valid correlation matrix',
              value: { message: 'valid correlation matrix' },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCovarianceMatrixRoute = createRoute({
  method: 'post',
  path: '/assets/covariance/matrix',
  tags: ['Assets / Covariance Matrix'],
  summary: 'Covariance Matrix',
  description:
    'Compute the covariance matrix of assets from either:  \n* The asset correlation matrix and their volatilities (i.e., standard deviations)\n* The asset correlation matrix and their variances\n* The asset returns\n\nReferences\n* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length',
                          }),
                      })
                      .openapi({ required: ['assetReturns'] }),
                  )
                  .min(2),
              })
              .openapi({ required: ['assets'] }),
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCorrelationMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                  }),
                assetsVariances: z
                  .array(z.number().min(0))
                  .min(2)
                  .openapi({ description: 'assetsVariances[i] is the variance of the asset i' }),
              })
              .openapi({ required: ['assets', 'assetsCorrelationMatrix', 'assetsVariances'] }),
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCorrelationMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                  }),
                assetsVolatilities: z
                  .array(z.number().min(0))
                  .min(2)
                  .openapi({
                    description: 'assetsVolatilities[i] is the volatility of the asset i',
                  }),
              })
              .openapi({ required: ['assets', 'assetsCorrelationMatrix', 'assetsVolatilities'] }),
          ]),
          examples: {
            'From asset correlation matrix and standard deviations': {
              description:
                'Compute the covariance matrix of 2 assets based on their correlation matrix and their standard deviations',
              value: {
                assets: 2,
                assetsCorrelationMatrix: [
                  [1, -0.5],
                  [-0.5, 1],
                ],
                assetsVolatilities: [0.1, 0.05],
              },
            },
            'From asset correlation matrix and variances': {
              description:
                'Compute the covariance matrix of 2 assets based on their correlation matrix and their variances',
              value: {
                assets: 2,
                assetsCorrelationMatrix: [
                  [1, -0.5],
                  [-0.5, 1],
                ],
                assetsVariances: [0.01, 0.0025],
              },
            },
            'From assets returns': {
              description: 'Compute the covariance matrix of 2 assets based on 4 returns per asset',
              value: {
                assets: [
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assetsCovarianceMatrix'] }),
          examples: {
            'From correlation matrix and standard deviations': {
              description: 'Computed covariance matrix',
              value: {
                assetsCovarianceMatrix: [
                  [0.010000000000000002, -0.0025000000000000005],
                  [-0.0025000000000000005, 0.0025000000000000005],
                ],
              },
            },
            'From correlation matrix and variances': {
              description: 'Computed covariance matrix',
              value: {
                assetsCovarianceMatrix: [
                  [0.010000000000000002, -0.0025000000000000005],
                  [-0.0025000000000000005, 0.0025000000000000005],
                ],
              },
            },
            'From returns': {
              description: 'Computed covariance matrix',
              value: {
                assetsCovarianceMatrix: [
                  [0.00035, 0.00035],
                  [0.00035, 0.00035],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCovarianceMatrixEffectiveRankRoute = createRoute({
  method: 'post',
  path: '/assets/covariance/matrix/effective-rank',
  tags: ['Assets / Covariance Matrix'],
  summary: 'Covariance Matrix Effective Rank',
  description:
    'Compute the effective rank of an asset covariance matrix.\n\nReferences\n* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Compute the effective rank of a covariance matrix of 2 assets',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.00035, -0.00035],
                  [-0.00035, 0.00035],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCovarianceMatrixEffectiveRank: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({ description: 'The effective rank of the asset covariance matrix' }),
            })
            .openapi({ required: ['assetsCovarianceMatrixEffectiveRank'] }),
          examples: {
            Example: {
              description: 'Computed effective rank',
              value: { assetsCovarianceMatrixEffectiveRank: 1 },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCovarianceMatrixExponentiallyWeightedRoute = createRoute({
  method: 'post',
  path: '/assets/covariance/matrix/exponentially-weighted',
  tags: ['Assets / Covariance Matrix'],
  summary: 'Exponentially Weighted Covariance Matrix',
  description:
    'Compute an exponentially weighted covariance matrix of assets returns.\n\nReferences\n* [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(2),
              decayFactor: z
                .number()
                .positive()
                .lt(1)
                .default(0.94)
                .exactOptional()
                .openapi({ description: 'The exponential decay factor' }),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Computes an exponentially weighted covariance matrix of 2 assets based on 4 returns per asset and a decay factor of 0.5',
              value: {
                assets: [
                  { assetReturns: [0.01, 0.01, 0.02, 0.01] },
                  { assetReturns: [-0.02, -0.02, -0.04, -0.02] },
                ],
                decayFactor: 0.5,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the sample covariance between the asset i returns and the asset j returns',
                }),
            })
            .openapi({ required: ['assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Computed exponentially weighted covariance matrix',
              value: {
                assetsCovarianceMatrix: [
                  [0.000019583333333333333, -0.000039166666666666665],
                  [-0.000039166666666666665, 0.00007833333333333333],
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsCovarianceMatrixValidationRoute = createRoute({
  method: 'post',
  path: '/assets/covariance/matrix/validation',
  tags: ['Assets / Covariance Matrix'],
  summary: 'Covariance Matrix Validation',
  description:
    'Validate whether a matrix is a covariance matrix.\n\nReferences\n* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Validate whether the provided matrix is a covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.00035, -0.00035],
                  [-0.00035, 0.00035],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .enum([
                  'valid covariance matrix',
                  'invalid covariance matrix - non symmetric matrix',
                  'invalid covariance matrix - non positive diagonal elements',
                  'invalid covariance matrix - non positive semi-definite matrix',
                ])
                .openapi({
                  description: 'Indicates whether the matrix is a valid covariance matrix',
                }),
            })
            .openapi({ required: ['message'] }),
          examples: {
            Example: {
              description: 'Valid covariance matrix',
              value: { message: 'valid covariance matrix' },
            },
          },
        },
      },
    },
  },
})

export const postAssetsKurtosisRoute = createRoute({
  method: 'post',
  path: '/assets/kurtosis',
  tags: ['Assets / Kurtosis'],
  summary: 'Kurtosis',
  description:
    'Compute the kurtosis of one or several asset(s), from the asset returns.\n\nReferences\n* [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(4)
                        .openapi({
                          description: 'assetReturns[t] is the return of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Compute the kurtosis of 1 asset based on 4 returns',
              value: { assets: [{ assetReturns: [0.01, 0, 0.02, -0.03] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetKurtosis: z.number().openapi({ description: 'The kurtosis of the asset' }),
                  })
                  .openapi({ required: ['assetKurtosis'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Computed kurtosis of 1 assetx',
              value: { assets: [{ assetKurtosis: 2 }] },
            },
          },
        },
      },
    },
  },
})

export const postAssetsPricesAdjustedRoute = createRoute({
  method: 'post',
  path: '/assets/prices/adjusted',
  tags: ['Assets / Prices'],
  summary: 'Adjusted Prices',
  description:
    'Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:\n* Unadjusted prices\n* Capital distributions, like stock dividends\n* Splits, like stock splits\n\nThe adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:\n* The price on the last date for which unadjusted prices are available is left unadjusted\n* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available\n\nReferences\n* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetDividends: z
                        .array(
                          z
                            .object({
                              amount: z
                                .number()
                                .positive()
                                .openapi({
                                  description:
                                    'The dividend amount distributed by the asset at the date t',
                                }),
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date',
                                }),
                            })
                            .openapi({ required: ['date', 'amount'] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'assetDividends[t] contains dividend information for the asset at the date t',
                        }),
                      assetPrices: z
                        .array(
                          z
                            .object({
                              close: z
                                .number()
                                .positive()
                                .openapi({
                                  description:
                                    'The unadjusted close price of the asset at the date t',
                                }),
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD',
                                }),
                            })
                            .openapi({ required: ['date', 'close'] }),
                        )
                        .min(1)
                        .openapi({
                          description:
                            'assetPrices[t] contains price information for the asset at the date t',
                        }),
                      assetSplits: z
                        .array(
                          z
                            .object({
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date',
                                }),
                              factor: z
                                .number()
                                .positive()
                                .openapi({
                                  description: 'The split factor of the asset at the date t',
                                }),
                            })
                            .openapi({ required: ['date', 'factor'] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'assetSplits[t] contains split information for the asset at the date t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Illustrate the 1-to-5 TSLA stock split which took place on August 31, 2020',
              value: {
                assets: [
                  {
                    assetPrices: [
                      { close: 2213.4, date: '2020-08-28' },
                      { close: 498.32, date: '2020-08-31' },
                      { close: 475.05, date: '2020-09-01' },
                    ],
                    assetSplits: [{ date: '2020-08-31', factor: 5 }],
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetAdjustedPrices: z
                      .array(
                        z
                          .object({
                            date: z
                              .string()
                              .openapi({
                                description:
                                  'The date corresponding to the date t in format YYYY-MM-DD',
                              }),
                            dividendAdjustedClose: z
                              .number()
                              .positive()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided',
                              }),
                            fullyAdjustedClose: z
                              .number()
                              .positive()
                              .openapi({
                                description:
                                  'The dividend(s) and split(s) adjusted close price of the asset at the date t',
                              }),
                            splitAdjustedClose: z
                              .number()
                              .positive()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided',
                              }),
                          })
                          .openapi({ required: ['date', 'fullyAdjustedClose'] }),
                      )
                      .min(1)
                      .openapi({
                        description:
                          'assetAdjustedPrices[t] contains adjusted price information for the asset at the date t',
                      }),
                  })
                  .openapi({ required: ['assetAdjustedPrices'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Illustrate the 1-to-5 TSLA stock split which took place on August 31, 2020',
              value: {
                assets: [
                  {
                    assetAdjustedPrices: [
                      {
                        date: '2020-09-01',
                        fullyAdjustedClose: 475.05,
                        splitAdjustedClose: 475.05,
                      },
                      {
                        date: '2020-08-31',
                        fullyAdjustedClose: 498.32,
                        splitAdjustedClose: 498.32,
                      },
                      {
                        date: '2020-08-28',
                        fullyAdjustedClose: 442.68,
                        splitAdjustedClose: 442.68,
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsPricesAdjustedForwardRoute = createRoute({
  method: 'post',
  path: '/assets/prices/adjusted/forward',
  tags: ['Assets / Prices'],
  summary: 'Forward-Adjusted Prices',
  description:
    'Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:\n* Unadjusted prices\n* Capital distributions, like stock dividends\n* Splits, like stock splits\n\nThe adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:\n* The price on the first date for which unadjusted prices are available is left unadjusted\n* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available\n\nReferences\n* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetDividends: z
                        .array(
                          z
                            .object({
                              amount: z
                                .number()
                                .positive()
                                .openapi({
                                  description:
                                    'The dividend amount distributed by the asset at the date t',
                                }),
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date',
                                }),
                            })
                            .openapi({ required: ['date', 'amount'] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'assetDividends[t] contains dividend information for the asset at the date t',
                        }),
                      assetPrices: z
                        .array(
                          z
                            .object({
                              close: z
                                .number()
                                .positive()
                                .openapi({
                                  description:
                                    'The unadjusted close price of the asset at the date t',
                                }),
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD',
                                }),
                            })
                            .openapi({ required: ['date', 'close'] }),
                        )
                        .min(1)
                        .openapi({
                          description:
                            'assetPrices[t] contains price information for the asset at the date t',
                        }),
                      assetSplits: z
                        .array(
                          z
                            .object({
                              date: z
                                .string()
                                .openapi({
                                  description:
                                    'The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date',
                                }),
                              factor: z
                                .number()
                                .positive()
                                .openapi({
                                  description: 'The split factor of the asset at the date t',
                                }),
                            })
                            .openapi({ required: ['date', 'factor'] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'assetSplits[t] contains split information for the asset at the date t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Illustrate the 1-to-5 TSLA stock split which took place on August 31, 2020',
              value: {
                assets: [
                  {
                    assetPrices: [
                      { close: 2213.4, date: '2020-08-28' },
                      { close: 498.32, date: '2020-08-31' },
                      { close: 475.05, date: '2020-09-01' },
                    ],
                    assetSplits: [{ date: '2020-08-31', factor: 5 }],
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetAdjustedPrices: z
                      .array(
                        z
                          .object({
                            date: z
                              .string()
                              .openapi({
                                description:
                                  'The date corresponding to the date t in format YYYY-MM-DD',
                              }),
                            dividendAdjustedClose: z
                              .number()
                              .positive()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided',
                              }),
                            fullyAdjustedClose: z
                              .number()
                              .positive()
                              .openapi({
                                description:
                                  'The dividend(s) and split(s) adjusted close price of the asset at the date t',
                              }),
                            splitAdjustedClose: z
                              .number()
                              .positive()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided',
                              }),
                          })
                          .openapi({ required: ['date', 'fullyAdjustedClose'] }),
                      )
                      .min(1)
                      .openapi({
                        description:
                          'assetAdjustedPrices[t] contains adjusted price information for the asset at the date t',
                      }),
                  })
                  .openapi({ required: ['assetAdjustedPrices'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Illustrate the 1-to-5 TSLA stock split which took place on August 31, 2020',
              value: {
                assets: [
                  {
                    assetAdjustedPrices: [
                      {
                        date: '2020-08-28',
                        fullyAdjustedClose: 2213.4,
                        splitAdjustedClose: 2213.4,
                      },
                      {
                        date: '2020-08-31',
                        fullyAdjustedClose: 2491.6,
                        splitAdjustedClose: 2491.6,
                      },
                      {
                        date: '2020-09-01',
                        fullyAdjustedClose: 2375.25,
                        splitAdjustedClose: 2375.25,
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsReturnsRoute = createRoute({
  method: 'post',
  path: '/assets/returns',
  tags: ['Assets / Returns'],
  summary: 'Arithmetic Returns',
  description:
    'Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).\n\nReferences\n* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Compute the arithmetic returns of 2 assets, one with prices 1,2 and the other with prices 2,3,6',
              value: { assets: [{ assetPrices: [1, 2] }, { assetPrices: [2, 3, 6] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetReturns: z
                      .array(z.number())
                      .openapi({
                        description:
                          'assetReturns[t] is the arithmetic return of the asset from the time t-1 to the time t, in percentage',
                      }),
                  })
                  .openapi({ required: ['assetReturns'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Computed an arithmetic return of 100% for the first asset and arithmetic returns of respectively 50% and 100% for the second asset',
              value: { assets: [{ assetReturns: [1] }, { assetReturns: [0.5, 1] }] },
            },
          },
        },
      },
    },
  },
})

export const postAssetsReturnsAverageRoute = createRoute({
  method: 'post',
  path: '/assets/returns/average',
  tags: ['Assets / Returns'],
  summary: 'Arithmetic Average Return',
  description:
    'Compute the arithmetic average of the return(s) of one or several asset(s).\n\nReferences\n* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(1)
                        .openapi({
                          description: 'assetReturns[t] is the return of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Compute the arithmetic average return of 2 assets, one with returns 10%, -5% and the other with returns 0%,-1%,1%',
              value: {
                assets: [{ assetReturns: [0.1, -0.05] }, { assetReturns: [0, -0.01, 0.01] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetAverageReturn: z
                      .number()
                      .openapi({ description: 'The arithmetic average return of the asset' }),
                  })
                  .openapi({ required: ['assetAverageReturn'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Computed average arithmetic return of 2.5% for the first asset, and average arithmetic return of 0% for the second asset',
              value: { assets: [{ assetAverageReturn: 0.025 }, { assetAverageReturn: 0 }] },
            },
          },
        },
      },
    },
  },
})

export const postAssetsReturnsSimulationBootstrapRoute = createRoute({
  method: 'post',
  path: '/assets/returns/simulation/bootstrap',
  tags: ['Assets / Returns Simulation'],
  summary: 'Bootstrap',
  description:
    'Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.\n\nReferences\n* [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)\n* [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)\n* [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'assetReturns[t] is the return of the asset over the time period t; all the assetReturns arrays must have the same length',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(2),
              bootstrapAverageBlockLength: z
                .number()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    "The average length of the blocks to use in case the bootstrap method is 'stationaryBlock', in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3",
                }),
              bootstrapBlockLength: z
                .int()
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    "The length of the blocks to use in case the bootstrap method is 'circularBlock', in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3]",
                }),
              bootstrapMethod: z
                .enum(['iid', 'circularBlock', 'stationaryBlock'])
                .default('stationaryBlock')
                .exactOptional()
                .openapi({ description: 'The bootstrap method to use' }),
              simulations: z
                .int()
                .min(1)
                .default(25)
                .exactOptional()
                .openapi({ description: 'The number of simulations to perform' }),
              simulationsLength: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays',
                }),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Perform 5 simulations over 4 time periods of the returns of 2 assets using the circular block bootstrap method with a block length of 2 time periods.',
              value: {
                assets: [
                  { assetReturns: [0.1, -0.05, 0.01, 0.025, -0.1] },
                  { assetReturns: [0, 0.01, 0.02, -0.01, 0.05] },
                ],
                bootstrapBlockLength: 2,
                bootstrapMethod: 'circularBlock',
                simulations: 5,
                simulationsLength: 4,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              simulations: z.array(
                z
                  .object({
                    assets: z
                      .array(
                        z
                          .object({
                            assetReturns: z
                              .array(z.number())
                              .openapi({
                                description:
                                  'assetReturns[t] is the simulated return of the i-th asset for the t-th time period, in percentage',
                              }),
                          })
                          .openapi({ required: ['assetReturns'] }),
                      )
                      .openapi({ description: 'assets[i] is the data for the i-th asset' }),
                  })
                  .openapi({ required: ['assets'] }),
              ),
            })
            .openapi({ required: ['simulations'] }),
          examples: {
            Example: {
              description: 'Results of 1 simulation of returns for 2 assets and for 2 time periods',
              value: {
                simulations: [
                  { assets: [{ assetReturns: [0.01, 0.02] }, { assetReturns: [0.01, -0.02] }] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsSkewnessRoute = createRoute({
  method: 'post',
  path: '/assets/skewness',
  tags: ['Assets / Skewness'],
  summary: 'Skewness',
  description:
    'Compute the skewness of one or several asset(s), from the asset returns.\n\nReferences\n* [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(3)
                        .openapi({
                          description: 'assetReturns[t] is the return of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Compute the skewness of 1 asset based on 4 returns',
              value: { assets: [{ assetReturns: [0.01, 0, 0.02, -0.03] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetSkewness: z.number().openapi({ description: 'The skewness of the asset' }),
                  })
                  .openapi({ required: ['assetSkewness'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Computed skewness of 1 assetx',
              value: { assets: [{ assetSkewness: -0.6872431934890911 }] },
            },
          },
        },
      },
    },
  },
})

export const postAssetsVarianceRoute = createRoute({
  method: 'post',
  path: '/assets/variance',
  tags: ['Assets / Variance'],
  summary: 'Variance',
  description:
    'Compute the variance of one or several asset(s) from either:  \n* The asset returns\n* The asset covariance matrix\n* The asset volatility(ies)\n\nReferences\n* [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description: 'assetReturns[t] is the return of the asset at the time t',
                          }),
                      })
                      .openapi({ required: ['assetReturns'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets'] }),
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
              })
              .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetVolatility: z
                          .number()
                          .min(0)
                          .openapi({ description: 'The asset volatility' }),
                      })
                      .openapi({ required: ['assetVolatility'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets'] }),
          ]),
          examples: {
            'From asset covariance matrix': {
              description: 'Compute the variance of 2 assets based on their covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.01, -0.0025],
                  [-0.0025, 0.0025],
                ],
              },
            },
            'From asset returns': {
              description: 'Compute the variance of 2 assets based on 4 returns per asset',
              value: {
                assets: [
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                ],
              },
            },
            'From asset volatilities': {
              description: 'Compute the variance of 2 assets based on their volatility',
              value: { assets: [{ assetVolatility: 1 }, { assetVolatility: 0.05 }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetVariance: z
                      .number()
                      .min(0)
                      .openapi({ description: 'The variance of the asset' }),
                  })
                  .openapi({ required: ['assetVariance'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            'From covariance matrix': {
              description: 'Computed variance of 2 assets',
              value: { assets: [{ assetVariance: 0.01 }, { assetVariance: 0.0025 }] },
            },
            'From returns': {
              description: 'Computed variance of 2 assets',
              value: { assets: [{ assetVariance: 0.00035 }, { assetVariance: 0.00035 }] },
            },
            'From volatilities': {
              description: 'Computed variance of 2 assets',
              value: {
                assets: [
                  { assetVariance: 0.010000000000000002 },
                  { assetVariance: 0.0025000000000000005 },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postAssetsVolatilityRoute = createRoute({
  method: 'post',
  path: '/assets/volatility',
  tags: ['Assets / Volatility'],
  summary: 'Volatility',
  description:
    'Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  \n* The asset returns\n* The asset covariance matrix\n* The asset variance(s)\n\nReferences\n* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description: 'assetReturns[t] is the return of the asset at the time t',
                          }),
                      })
                      .openapi({ required: ['assetReturns'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets'] }),
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
              })
              .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetVariance: z
                          .number()
                          .min(0)
                          .openapi({ description: 'The asset variance' }),
                      })
                      .openapi({ required: ['assetVariance'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets'] }),
          ]),
          examples: {
            'From asset covariance matrix': {
              description: 'Compute the volatility of 2 assets based on their covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.01, -0.0025],
                  [-0.0025, 0.0025],
                ],
              },
            },
            'From asset returns': {
              description: 'Compute the volatility of 2 assets based on 4 returns per asset',
              value: {
                assets: [
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                  { assetReturns: [0.01, 0, 0.02, -0.03] },
                ],
              },
            },
            'From asset variance': {
              description: 'Compute the volatility of 2 assets based on their variance',
              value: { assets: [{ assetVariance: 0.01 }, { assetVariance: 0.0025 }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.array(
                z
                  .object({
                    assetVolatility: z
                      .number()
                      .min(0)
                      .openapi({ description: 'The volatility of the asset' }),
                  })
                  .openapi({ required: ['assetVolatility'] }),
              ),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            'From covariance matrix': {
              description: 'Computed volatility of 2 assets',
              value: { assets: [{ assetVolatility: 0.1 }, { assetVolatility: 0.05 }] },
            },
            'From returns': {
              description: 'Computed volatility of 2 assets',
              value: {
                assets: [
                  { assetVolatility: 0.01870828693386971 },
                  { assetVolatility: 0.01870828693386971 },
                ],
              },
            },
            'From variances': {
              description: 'Computed volatility of 2 assets',
              value: { assets: [{ assetVolatility: 0.1 }, { assetVolatility: 0.05 }] },
            },
          },
        },
      },
    },
  },
})

export const postFactorsResidualizationRoute = createRoute({
  method: 'post',
  path: '/factors/residualization',
  tags: ['Factors'],
  summary: 'Residualization',
  description:
    'Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.\n\nReferences\n* [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)\n* [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              factors: z
                .array(
                  z
                    .object({
                      factorReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length',
                        }),
                    })
                    .openapi({ required: ['factorReturns'] }),
                )
                .min(2),
              residualizedFactor: z
                .int()
                .min(1)
                .openapi({ description: 'The index of the factor to residualize' }),
            })
            .openapi({ required: ['factors', 'residualizedFactor'] }),
          examples: {
            Example: {
              description:
                'Residualize the returns of the first factor among a set of 2 factors, observed during 3 time periods',
              value: {
                factors: [
                  { factorReturns: [0.01, 0.02, -0.01] },
                  { factorReturns: [0.025, 0.005, -0.02] },
                ],
                residualizedFactor: 1,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              residualizedFactorReturns: z
                .array(z.number())
                .openapi({
                  description:
                    'residualizedFactorReturns[t] is the return of the residualized factor at the time t',
                }),
            })
            .openapi({ required: ['residualizedFactorReturns'] }),
          examples: {
            Example: {
              description:
                'Computed returns of a residualized factor, observed during 3 time periods',
              value: {
                residualizedFactorReturns: [
                  -0.001885245901639342, 0.017622950819672134, -0.0004918032786885261,
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisAlphaRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/alpha',
  tags: ['Portfolio Analysis'],
  summary: 'Alpha',
  description:
    'Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                benchmarkReturns: z
                  .array(z.number())
                  .min(2)
                  .openapi({
                    description:
                      'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array',
                          }),
                      })
                      .openapi({ required: ['portfolioReturns'] }),
                  )
                  .min(1),
                riskFreeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The risk free rate, assumed to be constant for any time t',
                  }),
              })
              .openapi({ required: ['benchmarkReturns', 'portfolios'] }),
            z
              .object({
                benchmarkReturns: z
                  .array(z.number())
                  .min(2)
                  .openapi({
                    description:
                      'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array',
                          }),
                      })
                      .openapi({ required: ['portfolioReturns'] }),
                  )
                  .min(1),
                riskFreeReturns: z
                  .array(z.number())
                  .min(2)
                  .exactOptional()
                  .openapi({
                    description:
                      'riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays',
                  }),
              })
              .openapi({ required: ['benchmarkReturns', 'portfolios'] }),
          ]),
          examples: {
            Example: {
              description: 'Compute the Jensen’s alpha of one portfolio',
              value: {
                benchmarkReturns: [0.002, 0.025, 0.018, -0.011, 0.014],
                portfolios: [{ portfolioReturns: [0.003, 0.026, 0.011, -0.01, 0.015] }],
                riskFreeRate: 0.01,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioAlpha: z
                        .number()
                        .openapi({
                          description:
                            "The portfolio Jensen's alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM)",
                        }),
                    })
                    .openapi({ required: ['portfolioAlpha'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: "Computed Jensen's alpha of one portfolio",
              value: { portfolios: [{ portfolioAlpha: -0.0006332179930795853 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisBetaRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/beta',
  tags: ['Portfolio Analysis'],
  summary: 'Beta',
  description:
    'Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                benchmarkReturns: z
                  .array(z.number())
                  .min(2)
                  .openapi({
                    description:
                      'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array',
                          }),
                      })
                      .openapi({ required: ['portfolioReturns'] }),
                  )
                  .min(1),
                riskFreeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The risk free rate, assumed to be constant for any time t',
                  }),
              })
              .openapi({ required: ['benchmarkReturns', 'portfolios'] }),
            z
              .object({
                benchmarkReturns: z
                  .array(z.number())
                  .min(2)
                  .openapi({
                    description:
                      'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioReturns: z
                          .array(z.number())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array',
                          }),
                      })
                      .openapi({ required: ['portfolioReturns'] }),
                  )
                  .min(1),
                riskFreeReturns: z
                  .array(z.number())
                  .min(2)
                  .exactOptional()
                  .openapi({
                    description:
                      'riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays',
                  }),
              })
              .openapi({ required: ['benchmarkReturns', 'portfolios'] }),
          ]),
          examples: {
            Example: {
              description: 'Compute the beta of one portfolio',
              value: {
                benchmarkReturns: [0.002, 0.025, 0.018, -0.011, 0.014],
                portfolios: [{ portfolioReturns: [0.003, 0.026, 0.011, -0.01, 0.015] }],
                riskFreeRate: 0.01,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioBeta: z
                        .number()
                        .openapi({
                          description:
                            'The portfolio beta, which correponds to the portfolio systematic risk in the Capital Asset Pricing Model (CAPM)',
                        }),
                    })
                    .openapi({ required: ['portfolioBeta'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed beta of one portfolio',
              value: { portfolios: [{ portfolioBeta: 0.9169550173010382 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisConditionalValueAtRiskRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/conditional-value-at-risk',
  tags: ['Portfolio Analysis'],
  summary: 'Conditional Value At Risk',
  description:
    'Compute the conditional value at risk of one or several portfolio(s) from portfolio values.\n\nReferences\n* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)\n* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alpha: z
                .number()
                .positive()
                .lt(1)
                .openapi({ description: 'The conditional value at risk level' }),
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios', 'alpha'] }),
          examples: {
            'From portfolio values': {
              description:
                'Compute the 5% conditional value at risk of a portfolio based on portfolio values',
              value: { alpha: 0.05, portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioConditionalValueAtRisk: z
                        .number()
                        .openapi({ description: 'The conditional value at risk of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioConditionalValueAtRisk'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed conditional value at risk of a portfolio',
              value: { portfolios: [{ portfolioConditionalValueAtRisk: 0.17647058823529413 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisContributionsReturnRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/contributions/return',
  tags: ['Portfolio Analysis'],
  summary: 'Return Contributions',
  description:
    'Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(1).openapi({ description: 'The number of assets' }),
              assetsGroups: z
                .array(
                  z
                    .array(z.int().min(1))
                    .min(2)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    })
                    .openapi({
                      description:
                        'assetsGroups[k] is the indexes of the assets belonging to the assets group k',
                    }),
                )
                .min(1)
                .exactOptional(),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(1)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets', 'assetsReturns', 'portfolios'] }),
          examples: {
            Example: {
              description:
                'Perform a return contributions analysis of a portfolio made of 3 assets with the first 2 assets grouped together',
              value: {
                assets: 3,
                assetsGroups: [[1, 2]],
                assetsReturns: [0.01, -0.01, 0.025],
                portfolios: [{ assetsWeights: [0.5, 0.25, 0.25] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    assetsGroupsReturnContributions: z
                      .array(z.number())
                      .min(1)
                      .exactOptional()
                      .openapi({
                        description:
                          'assetsGroupsReturnContributions[k] is the return contribution of the group of assets k to the return of the portfolio',
                      }),
                    assetsReturnContributions: z
                      .array(z.number())
                      .min(1)
                      .openapi({
                        description:
                          'assetsReturnContributions[i] is the return contribution of the asset i to the return of the portfolio',
                      }),
                  })
                  .openapi({ required: ['assetsReturnContributions'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed the return contributions of 3 assets and 2 groups of assets',
              value: {
                portfolios: [
                  {
                    assetsGroupsReturnContributions: [0.0025, 0.00625],
                    assetsReturnContributions: [0.005, -0.0025, 0.00625],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisContributionsRiskRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/contributions/risk',
  tags: ['Portfolio Analysis'],
  summary: 'Risk Contributions',
  description:
    'Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(1).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsGroups: z
                .array(
                  z
                    .array(z.int().min(1))
                    .min(2)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    })
                    .openapi({
                      description:
                        'assetsGroups[k] is the indexes of the assets belonging to the assets group k',
                    }),
                )
                .min(1)
                .exactOptional(),
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(1)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix', 'portfolios'] }),
          examples: {
            Example: {
              description: 'Perform a risk contributions analysis of a portfolio made of 3 assets',
              value: {
                assets: 3,
                assetsCovarianceMatrix: [
                  [0.0001, 0, 0],
                  [0, 0.0001, 0],
                  [0, 0, 0.04],
                ],
                portfolios: [{ assetsWeights: [0.5, 0.25, 0.25] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    assetsGroupsRiskContributions: z
                      .array(z.number())
                      .min(1)
                      .exactOptional()
                      .openapi({
                        description:
                          'assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio',
                      }),
                    assetsRiskContributions: z
                      .array(z.number())
                      .min(1)
                      .openapi({
                        description:
                          'assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio',
                      }),
                  })
                  .openapi({ required: ['assetsRiskContributions'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed the risk contributions of 3 assets',
              value: {
                portfolios: [
                  {
                    assetsRiskContributions: [
                      0.0004969039949999533, 0.00012422599874998834, 0.049690399499995326,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisCorrelationSpectrumRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/correlation-spectrum',
  tags: ['Portfolio Analysis'],
  summary: 'Correlation Spectrum',
  description:
    'Compute the correlation spectrum of one or several portfolio(s).\n\nReferences\n* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        assetsWeights: z
                          .array(z.number().min(0).max(1))
                          .min(1)
                          .openapi({
                            description:
                              'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                          }),
                      })
                      .openapi({ required: ['assetsWeights'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets', 'assetsCovarianceMatrix', 'portfolios'] }),
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetPrices: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length',
                          }),
                      })
                      .openapi({ required: ['assetPrices'] }),
                  )
                  .min(1),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets', 'portfolios'] }),
          ]),
          examples: {
            'From asset covariance matrix': {
              description: 'Compute the correlation spectrum of a portfolio',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                portfolios: [{ assetsWeights: [0.5, 0.5] }],
              },
            },
            'From assets prices and portfolio values': {
              description: 'Compute the correlation spectrum of a portfolio',
              value: {
                assets: [{ assetPrices: [100, 101, 105] }, { assetPrices: [100, 99, 101] }],
                portfolios: [{ portfolioValues: [100, 100.5, 101] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioCorrelationSpectrum: z
                      .array(z.number().min(-1).max(1))
                      .min(2)
                      .openapi({ description: 'The correlation spectrum of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioCorrelationSpectrum'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed correlation spectrum of a portfolio',
              value: {
                portfolios: [
                  {
                    portfolioCorrelationSpectrum: [
                      0.9543679526112243, 0.5767242991086425, 0.9573818866065777,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisDiversificationRatioRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/diversification-ratio',
  tags: ['Portfolio Analysis'],
  summary: 'Diversification Ratio',
  description:
    'Compute the diversification ratio of one or several portfolio(s).\n\nReferences\n* [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)\n* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        assetsWeights: z
                          .array(z.number().min(0).max(1))
                          .min(1)
                          .openapi({
                            description:
                              'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                          }),
                      })
                      .openapi({ required: ['assetsWeights'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets', 'assetsCovarianceMatrix', 'portfolios'] }),
            z
              .object({
                assets: z
                  .array(
                    z
                      .object({
                        assetPrices: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length',
                          }),
                      })
                      .openapi({ required: ['assetPrices'] }),
                  )
                  .min(1),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['assets', 'portfolios'] }),
          ]),
          examples: {
            'From asset covariance matrix': {
              description: 'Compute the diversification ratio of a portfolio',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                portfolios: [{ assetsWeights: [0.5, 0.5] }],
              },
            },
            'From assets prices and portfolio values': {
              description: 'Compute the diversification ratio of a portfolio',
              value: {
                assets: [{ assetPrices: [100, 101, 105] }, { assetPrices: [100, 99, 101] }],
                portfolios: [{ portfolioValues: [100, 100.5, 101] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioDiversificationRatio: z
                      .number()
                      .min(0)
                      .openapi({ description: 'The diversification ratio of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioDiversificationRatio'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed diversification ratio of a portfolio',
              value: { portfolios: [{ portfolioDiversificationRatio: 1.2909944487358058 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisDrawdownsRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/drawdowns',
  tags: ['Portfolio Analysis'],
  summary: 'Drawdowns',
  description:
    'Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).\n\nReferences\n* [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description:
                'Computes the drawdown (underwater) curve and the worst 10 drawdowns of a portfolio',
              value: { portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioDrawdowns: z
                      .array(z.number().min(0))
                      .min(1)
                      .openapi({
                        description:
                          'portfolioDrawdowns[t] is the value of the drawdown function at the time t',
                      }),
                    portfolioWorstDrawdowns: z
                      .array(
                        z
                          .object({
                            drawdownBottom: z.int().min(0),
                            drawdownDepth: z.number().min(0),
                            drawdownEnd: z.int().min(0),
                            drawdownStart: z.int().min(0),
                          })
                          .openapi({
                            required: [
                              'drawdownDepth',
                              'drawdownStart',
                              'drawdownBottom',
                              'drawdownEnd',
                            ],
                          }),
                      )
                      .min(1),
                  })
                  .openapi({ required: ['portfolioDrawdowns', 'portfolioWorstDrawdowns'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description:
                'Computed a maximum drawdown of 30%, which began in the third period, which reached its bottom in the sixth period, and which is not ended yet',
              value: {
                portfolios: [
                  {
                    portfolioDrawdowns: [0, 0.05, 0, 0.1, 0.15, 0.3],
                    portfolioWorstDrawdowns: [
                      { drawdownBottom: 6, drawdownDepth: 0.3, drawdownEnd: 0, drawdownStart: 3 },
                      { drawdownBottom: 2, drawdownDepth: 0.05, drawdownEnd: 3, drawdownStart: 1 },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisEffectiveNumberOfBetsRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/effective-number-of-bets',
  tags: ['Portfolio Analysis'],
  summary: 'Effective Number of Bets',
  description:
    'Compute the effective number of bets of one or several portfolio(s).\n\nReferences\n* [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              factorsExtractionMethod: z
                .enum([
                  'principalComponentAnalysis',
                  'exactMinimumLinearTorsion',
                  'approximateMinimumLinearTorsion',
                ])
                .default('exactMinimumLinearTorsion')
                .exactOptional()
                .openapi({
                  description:
                    'The method used to extract the uncorrelated risk factors from the asset covariance matrix',
                }),
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix', 'portfolios'] }),
          examples: {
            Example: {
              description: 'Compute the effective number of bets of a portfolio made of 3 assets',
              value: {
                assets: 3,
                assetsCovarianceMatrix: [
                  [1, 0, 0],
                  [0, 286.31, 100.79],
                  [0, 100.79, 601.36],
                ],
                portfolios: [{ assetsWeights: [10.96, 1.06, 0.22] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioEffectiveNumberOfBets: z
                      .number()
                      .min(0)
                      .openapi({ description: 'The effective number of bets of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioEffectiveNumberOfBets'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed effective number of bets of a portfolio of 3 assets',
              value: { portfolios: [{ portfolioEffectiveNumberOfBets: 2.3564325389900276 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisFactorsExposuresRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/factors/exposures',
  tags: ['Portfolio Analysis'],
  summary: 'Factor Exposures',
  description:
    'Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.\n\nReferences\n* [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              factors: z
                .array(
                  z
                    .object({
                      factorReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length, equal to the common length of the portfolioReturns arrays',
                        }),
                    })
                    .openapi({ required: ['factorReturns'] }),
                )
                .min(1)
                .exactOptional(),
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the common length of the factorReturns arrays',
                        }),
                    })
                    .openapi({ required: ['portfolioReturns'] }),
                )
                .min(1),
            })
            .openapi({ required: ['factorReturns', 'portfolios'] }),
          examples: {
            Example: {
              description: 'Compute the exposures of one portfolio to two factors',
              value: {
                factors: [
                  { factorReturns: [-0.00414169934, 0.01201656108, 0.0087181369] },
                  { factorReturns: [-0.01387258782, -0.01097961581, 0.01742002062] },
                ],
                portfolios: [{ portfolioReturns: [-0.04302, 0.01310372213, 0.06482589323] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioAlpha: z
                        .number()
                        .openapi({
                          description:
                            'The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures',
                        }),
                      portfolioBetas: z
                        .array(z.number())
                        .min(1)
                        .openapi({
                          description:
                            'The portfolio betas, which correspond to the portfolio factor exposures',
                        }),
                      portfolioRSquared: z
                        .number()
                        .openapi({
                          description:
                            'The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns',
                        }),
                    })
                    .openapi({
                      required: ['portfolioAlpha', 'portfolioBetas', 'portfolioRSquared'],
                    }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed exposures of one portfolio to two factors',
              value: {
                portfolios: [
                  {
                    portfolioAlpha: -0.000017563172006410804,
                    portfolioBetas: [3.083191766752847, 2.17931822921701],
                    portfolioRSquared: 1,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisMeanVarianceEfficientFrontierRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/mean-variance/efficient-frontier',
  tags: ['Portfolio Analysis'],
  summary: 'Mean-Variance Efficient Frontier',
  description:
    'Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:\n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraint\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              portfolios: z
                .int()
                .min(2)
                .default(25)
                .exactOptional()
                .openapi({
                  description:
                    'The number of portfolios to compute on the mean-variance efficient frontier',
                }),
            })
            .openapi({ required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Compute 3 portfolios belonging to the mean-variance efficient frontier',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                assetsReturns: [0.01, 0.05],
                constraints: { minimumAssetsWeights: [0.2, 0] },
                portfolios: 3,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(2)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                      portfolioReturn: z
                        .number()
                        .openapi({ description: 'The arithmetic return of the portfolio' }),
                      portfolioVolatility: z
                        .number()
                        .min(0)
                        .openapi({ description: 'The volatility of the portfolio' }),
                    })
                    .openapi({
                      required: ['assetsWeights', 'portfolioReturn', 'portfolioVolatility'],
                    }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed 3 mean-variance efficient portfolios',
              value: {
                portfolios: [
                  {
                    assetsWeights: [0.8260869565217391, 0.17391304347826086],
                    portfolioReturn: 0.016956521739130433,
                    portfolioVolatility: 0.0463915284620315,
                  },
                  {
                    assetsWeights: [0.5130434782608696, 0.48695652173913045],
                    portfolioReturn: 0.02947826086956522,
                    portfolioVolatility: 0.05726369211623199,
                  },
                  {
                    assetsWeights: [0.2, 0.8],
                    portfolioReturn: 0.04200000000000001,
                    portfolioVolatility: 0.08160882305241265,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/mean-variance/minimum-variance-frontier',
  tags: ['Portfolio Analysis'],
  summary: 'Mean-Variance Minimum Variance Frontier',
  description:
    'Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:\n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraint\n\n> This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              portfolios: z
                .int()
                .min(2)
                .default(25)
                .exactOptional()
                .openapi({
                  description:
                    'The number of portfolios to compute on the mean-variance minimum variance frontier',
                }),
            })
            .openapi({ required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute 4 portfolios belonging to the mean-variance minimum variance frontier',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                assetsReturns: [0.01, 0.05],
                constraints: { minimumAssetsWeights: [0.2, 0] },
                portfolios: 4,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(2)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                      portfolioReturn: z
                        .number()
                        .openapi({ description: 'The arithmetic return of the portfolio' }),
                      portfolioVolatility: z
                        .number()
                        .min(0)
                        .openapi({ description: 'The volatility of the portfolio' }),
                    })
                    .openapi({
                      required: ['assetsWeights', 'portfolioReturn', 'portfolioVolatility'],
                    }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed 4 mean-variance minimum variance portfolios',
              value: {
                portfolios: [
                  { assetsWeights: [1, 0], portfolioReturn: 0.01, portfolioVolatility: 0.05 },
                  {
                    assetsWeights: [0.7333333333333333, 0.2666666666666667],
                    portfolioReturn: 0.02066666666666667,
                    portfolioVolatility: 0.04744587559642156,
                  },
                  {
                    assetsWeights: [0.4666666666666667, 0.5333333333333333],
                    portfolioReturn: 0.03133333333333334,
                    portfolioVolatility: 0.06031399321697891,
                  },
                  {
                    assetsWeights: [0.2, 0.8],
                    portfolioReturn: 0.04200000000000001,
                    portfolioVolatility: 0.08160882305241265,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisReturnRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/return',
  tags: ['Portfolio Analysis'],
  summary: 'Arithmetic Return',
  description:
    'Compute the arithmetic return of one or several portfolio(s) from either:  \n* Portfolio assets arithmetic returns\n* Portfolio values\n\nReferences\n* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)\n* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(1).openapi({ description: 'The number of assets' }),
                assetsReturns: z
                  .array(z.number())
                  .min(1)
                  .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
                portfolios: z
                  .array(
                    z
                      .object({
                        assetsWeights: z
                          .array(z.number().min(0).max(1))
                          .min(1)
                          .openapi({
                            description:
                              'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                          }),
                      })
                      .openapi({ required: ['assetsWeights'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['portfolios', 'assets', 'assetsReturns'] }),
            z
              .object({
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['portfolios'] }),
          ]),
          examples: {
            'From assets arithmetic returns': {
              description:
                'Compute the arithmetic return of 2 portfolios based on the assets arithmetic returns',
              value: {
                assets: 2,
                assetsReturns: [0.01, 0.05],
                portfolios: [{ assetsWeights: [1, 0] }, { assetsWeights: [0, 1] }],
              },
            },
            'From portfolio values': {
              description: 'Compute the arithmetic return of a portfolio based on portfolio values',
              value: { portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioReturn: z
                        .number()
                        .openapi({ description: 'The arithmetic return of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioReturn'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed arithmetic return of 2 portfolios',
              value: { portfolios: [{ portfolioReturn: 0.01 }, { portfolioReturn: 0.05 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisReturnsAverageRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/returns/average',
  tags: ['Portfolio Analysis'],
  summary: 'Arithmetic Average Return',
  description:
    'Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).\n\nReferences\n* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            'From portfolio values': {
              description: 'Compute the arithmetic average return of a portfolio',
              value: { portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioAverageReturn: z
                      .number()
                      .openapi({ description: 'The arithmetic average return of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioAverageReturn'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed average arithmetic return of 1% for the first portfolio',
              value: { portfolios: [{ portfolioAverageReturn: 0.01 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisSharpeRatioRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/sharpe-ratio',
  tags: ['Portfolio Analysis / Sharpe ratio'],
  summary: 'Sharpe Ratio',
  description:
    'Compute the Sharpe ratio of one or several portfolio(s) from either:\n* Portfolio assets arithmetic returns and assets covariance matrix\n* Portfolio values\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
                assetsReturns: z
                  .array(z.number())
                  .min(2)
                  .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
                portfolios: z
                  .array(
                    z
                      .object({
                        assetsWeights: z
                          .array(z.number().min(0).max(1))
                          .min(2)
                          .openapi({
                            description:
                              'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                          }),
                      })
                      .openapi({ required: ['assetsWeights'] }),
                  )
                  .min(1),
                riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
              })
              .openapi({
                required: [
                  'portfolios',
                  'riskFreeRate',
                  'assets',
                  'assetsReturns',
                  'assetsCovarianceMatrix',
                ],
              }),
            z
              .object({
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
                riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
              })
              .openapi({ required: ['portfolios', 'riskFreeRate'] }),
          ]),
          examples: {
            'From assets arithmetic returns and asset covariance matrix': {
              description:
                'Compute the Sharpe ratio of 2 portfolios based on the assets arithmetic returns and covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                assetsReturns: [0.01, 0.05],
                portfolios: [{ assetsWeights: [1, 0] }, { assetsWeights: [0, 1] }],
                riskFreeRate: 0,
              },
            },
            'From portfolio values': {
              description: 'Compute the Sharpe ratio of a portfolio based on portfolio values',
              value: {
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioSharpeRatio: z
                        .number()
                        .openapi({ description: 'The Sharpe ratio of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioSharpeRatio'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed Sharpe ratio of a portfolio',
              value: { portfolios: [{ portfolioSharpeRatio: -0.8835333925060923 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisSharpeRatioBiasAdjustedRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/sharpe-ratio/bias-adjusted',
  tags: ['Portfolio Analysis / Sharpe ratio'],
  summary: 'Bias-Adjusted Sharpe Ratio',
  description:
    'Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.\n\nReferences\n* [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(4)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({ required: ['portfolios', 'riskFreeRate'] }),
          examples: {
            Example: {
              description: 'Compute the bias-adjusted Sharpe ratio of a portfolio',
              value: {
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioBiasAdjustedSharpeRatio: z
                        .number()
                        .openapi({
                          description: 'The bias-adjusted Sharpe ratio of the portfolio',
                        }),
                    })
                    .openapi({ required: ['portfolioBiasAdjustedSharpeRatio'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed bias-adjusted Sharpe ratio of a portfolio',
              value: { portfolios: [{ portfolioBiasAdjustedSharpeRatio: -0.8314248234836994 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisSharpeRatioConfidenceIntervalRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/sharpe-ratio/confidence-interval',
  tags: ['Portfolio Analysis / Sharpe ratio'],
  summary: 'Sharpe Ratio Confidence Interval',
  description:
    'Build a confidence interval for the Sharpe ratio of one or several portfolio(s).\n\nReferences\n* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              confidenceIntervalType: z
                .enum(['twoSided', 'lowerOneSided', 'upperOneSided'])
                .default('twoSided')
                .exactOptional()
                .openapi({ description: 'The type of confidence interval to build' }),
              confidenceLevel: z
                .number()
                .positive()
                .lt(1)
                .default(0.95)
                .exactOptional()
                .openapi({
                  description:
                    'The confidence level of the confidence interval to build, in percentage',
                }),
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(4)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({ required: ['portfolios', 'riskFreeRate'] }),
          examples: {
            Example: {
              description: 'Build a two-sided confidence interval at a confidence level 99%',
              value: {
                confidenceIntervalType: 'twoSided',
                confidenceLevel: 0.99,
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioSharpeRatioConfidenceInterval: z
                        .array(z.number())
                        .length(2)
                        .openapi({
                          description:
                            'portfolioSharpeRatioConfidenceInterval[0] (resp. portfolioSharpeRatioConfidenceInterval[1]) is the lower (resp. upper) bound of the built confidence interval, possibly equal to null in case of a negative infinite (resp. positive infinite) bound',
                        }),
                    })
                    .openapi({ required: ['portfolioSharpeRatioConfidenceInterval'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            'Example of a one-sided confidence interval': {
              description: 'A one-sided lower confidence interval of a portfolio',
              value: {
                portfolios: [
                  { portfolioSharpeRatioConfidenceInterval: [null, 0.3309901925834179] },
                ],
              },
            },
            'Example of a two-sided confidence interval': {
              description: 'A two-sided confidence interval of a portfolio',
              value: {
                portfolios: [
                  {
                    portfolioSharpeRatioConfidenceInterval: [
                      -2.2283045143292535, 0.46123772931706875,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisSharpeRatioProbabilisticRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/sharpe-ratio/probabilistic',
  tags: ['Portfolio Analysis / Sharpe ratio'],
  summary: 'Probabilistic Sharpe Ratio',
  description:
    'Compute the probabilistic Sharpe ratio of one or several portfolio(s).\n\nReferences\n* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)\n* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                benchmarkSharpeRatio: z
                  .number()
                  .openapi({
                    description:
                      'The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(4)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
                riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
              })
              .openapi({ required: ['portfolios', 'riskFreeRate', 'benchmarkSharpeRatio'] }),
            z
              .object({
                benchmarkValues: z
                  .array(z.number().positive())
                  .min(4)
                  .openapi({
                    description:
                      'benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(4)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length as the benchmarkValues array',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
                riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
              })
              .openapi({ required: ['portfolios', 'riskFreeRate', 'benchmarkValues'] }),
          ]),
          examples: {
            'Probabilistic Sharpe ratio of a portfolio v.s. a benchmark': {
              description:
                'Compute the probabilistic Sharpe ratio for a portfolio v.s. a benchmark',
              value: {
                benchmarkValues: [100, 101, 98, 102, 95, 90],
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
            'Probabilistic Sharpe ratio of a portfolio v.s. a benchmark Sharpe ratio': {
              description:
                'Compute the probabilistic Sharpe ratio for a portfolio v.s. a benchmark Sharpe ratio',
              value: {
                benchmarkSharpeRatio: 0,
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioProbabilisticSharpeRatio: z
                        .number()
                        .openapi({
                          description:
                            'The probabilistic Sharpe ratio of the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['portfolioProbabilisticSharpeRatio'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'The probabilistic Sharpe ratio of a portfolio',
              value: { portfolios: [{ portfolioProbabilisticSharpeRatio: 0.0452890775705429 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRoute =
  createRoute({
    method: 'post',
    path: '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length',
    tags: ['Portfolio Analysis / Sharpe ratio'],
    summary: 'Minimum Track Record Length',
    description:
      'Compute the minimum track record length of one or several portfolio(s).\n\nReferences\n* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)\n',
    request: {
      body: {
        content: {
          'application/json': {
            schema: z.xor([
              z
                .object({
                  benchmarkSharpeRatio: z
                    .number()
                    .openapi({
                      description:
                        'The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values',
                    }),
                  confidenceLevel: z
                    .number()
                    .positive()
                    .lt(1)
                    .default(0.95)
                    .exactOptional()
                    .openapi({
                      description:
                        'The confidence level of the minimum track record length, in percentage',
                    }),
                  portfolios: z
                    .array(
                      z
                        .object({
                          portfolioValues: z
                            .array(z.number().positive())
                            .min(4)
                            .openapi({
                              description:
                                'portfolioValues[t] is the value of the portfolio at the time t',
                            }),
                        })
                        .openapi({ required: ['portfolioValues'] }),
                    )
                    .min(1),
                  riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
                })
                .openapi({ required: ['portfolios', 'riskFreeRate', 'benchmarkSharpeRatio'] }),
              z
                .object({
                  benchmarkValues: z
                    .array(z.number().positive())
                    .min(4)
                    .exactOptional()
                    .openapi({
                      description:
                        'benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays',
                    }),
                  confidenceLevel: z
                    .number()
                    .positive()
                    .lt(1)
                    .default(0.95)
                    .exactOptional()
                    .openapi({
                      description:
                        'The confidence level of the minimum track record length, in percentage',
                    }),
                  portfolios: z
                    .array(
                      z
                        .object({
                          portfolioValues: z
                            .array(z.number().positive())
                            .min(4)
                            .openapi({
                              description:
                                'portfolioValues[t] is the value of the portfolio at the time t',
                            }),
                        })
                        .openapi({ required: ['portfolioValues'] }),
                    )
                    .min(1),
                  riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
                })
                .openapi({ required: ['portfolios', 'riskFreeRate', 'benchmarkSharpeRatio'] }),
            ]),
            examples: {
              'Minimum Track Record Length of a portfolio v.s. a benchmark': {
                description:
                  'Compute the minimum track record length of a portfolio v.s. a benchmark at a confidence level of 95%',
                value: {
                  benchmarkValues: [100, 101, 98, 85, 75, 65],
                  portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                  riskFreeRate: 0,
                },
              },
              'Minimum Track Record Length of a portfolio v.s. a benchmark Sharpe ratio': {
                description:
                  'Compute the minimum track record length of a portfolio v.s. a benchmark Sharpe ratio of 0 at a confidence level of 95%',
                value: {
                  benchmarkSharpeRatio: 0,
                  portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                  riskFreeRate: 0,
                },
              },
            },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z
              .object({
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioSharpeRatioMinimumTrackRecordLength: z
                          .number()
                          .openapi({
                            description:
                              'The minimum track record length of the portfolio, in number of required arithmetic returns, possibly equal to null in case the minimum track record length does not exist',
                          }),
                      })
                      .openapi({ required: ['portfolioSharpeRatioMinimumTrackRecordLength'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['portfolios'] }),
            examples: {
              'Example of non-existing minimum track record length': {
                description: 'Non-existing minimum track record length of a portfolio',
                value: { portfolios: [{ portfolioSharpeRatioMinimumTrackRecordLength: null }] },
              },
            },
          },
        },
      },
    },
  })

export const postPortfolioAnalysisTrackingErrorRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/tracking-error',
  tags: ['Portfolio Analysis'],
  summary: 'Tracking Error',
  description:
    'Compute the tracking error between a benchmark and one or several portfolio(s).\n\nReferences\n* [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) \n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              benchmarkReturns: z
                .array(z.number())
                .min(2)
                .openapi({
                  description:
                    'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays',
                }),
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioReturns[t] is the return of the portfolio at the time t, the portfolioReturns must have the same length as the benchmarkReturns array',
                        }),
                    })
                    .openapi({ required: ['portfolioReturns'] }),
                )
                .min(1),
            })
            .openapi({ required: ['benchmarkReturns', 'portfolios'] }),
          examples: {
            Example: {
              description: "Computes the tracking error using the example in Bacon's book",
              value: {
                benchmarkReturns: [
                  0.002, 0.025, 0.018, -0.011, 0.014, 0.018, 0.014, 0.065, -0.015, 0.042, -0.006,
                  0.083, 0.039, -0.038, -0.062, 0.015, -0.048, 0.021, 0.06, 0.056, -0.067, 0.019,
                  -0.003, 0,
                ],
                portfolios: [
                  {
                    portfolioReturns: [
                      0.003, 0.026, 0.011, -0.01, 0.015, 0.025, 0.016, 0.067, -0.014, 0.04, -0.005,
                      0.081, 0.04, -0.037, -0.061, 0.017, -0.049, -0.022, 0.07, 0.058, -0.065,
                      0.024, -0.005, -0.009,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioTrackingError: z
                        .number()
                        .min(0)
                        .openapi({ description: 'The tracking error of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioTrackingError'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: "The computed tracking error using the example in Bacon's book",
              value: { portfolios: [{ portfolioTrackingError: 0.00950648535942116 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisUlcerIndexRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/ulcer-index',
  tags: ['Portfolio Analysis'],
  summary: 'Ulcer Index',
  description:
    'Compute the Ulcer Index of one or several portfolio(s).\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({ required: ['portfolios', 'riskFreeRate'] }),
          examples: {
            'From portfolio values': {
              description: 'Compute the Ulcer Index of a portfolio based on portfolio values',
              value: { portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioUlcerIndex: z
                      .number()
                      .openapi({ description: 'The Ulcer Index of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioUlcerIndex'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed Ulcer Index of a portfolio',
              value: { portfolios: [{ portfolioUlcerIndex: 0.14433756729740643 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisUlcerPerformanceIndexRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/ulcer-performance-index',
  tags: ['Portfolio Analysis'],
  summary: 'Ulcer Performance Index',
  description:
    'Compute the Ulcer Performance Index of one or several portfolio(s).\n\nReferences\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({ required: ['portfolios', 'riskFreeRate'] }),
          examples: {
            'From portfolio values': {
              description:
                'Compute the Ulcer Performance Index of a portfolio based on portfolio values',
              value: {
                portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioUlcerPerformanceIndex: z
                      .number()
                      .openapi({ description: 'The Ulcer Performance Index of the portfolio' }),
                  })
                  .openapi({ required: ['portfolioUlcerPerformanceIndex'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed Ulcer Performance Index of a portfolio',
              value: { portfolios: [{ portfolioUlcerPerformanceIndex: -0.45642249763676057 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisValueAtRiskRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/value-at-risk',
  tags: ['Portfolio Analysis'],
  summary: 'Value At Risk',
  description:
    'Compute the value at risk of one or several portfolio(s) from portfolio values.\n\nReferences\n* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)\n* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alpha: z
                .number()
                .positive()
                .lt(1)
                .openapi({ description: 'The value at risk level' }),
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValues: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description:
                            'portfolioValues[t] is the value of the portfolio at the time t',
                        }),
                    })
                    .openapi({ required: ['portfolioValues'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios', 'alpha'] }),
          examples: {
            'From portfolio values': {
              description: 'Compute the 5% value at risk of a portfolio based on portfolio values',
              value: { alpha: 0.05, portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioValueAtRisk: z
                        .number()
                        .openapi({ description: 'The value at risk of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioValueAtRisk'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed value at risk of a portfolio',
              value: { portfolios: [{ portfolioValueAtRisk: 0.17647058823529413 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioAnalysisVolatilityRoute = createRoute({
  method: 'post',
  path: '/portfolio/analysis/volatility',
  tags: ['Portfolio Analysis'],
  summary: 'Volatility',
  description:
    'Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  \n* Portfolio assets covariance matrix\n* Portfolio values\n\nReferences\n* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)\n* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution\n* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
                portfolios: z
                  .array(
                    z
                      .object({
                        assetsWeights: z
                          .array(z.number().min(0).max(1))
                          .min(2)
                          .openapi({
                            description:
                              'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                          }),
                      })
                      .openapi({ required: ['assetsWeights'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['portfolios', 'assets', 'assetsCovarianceMatrix'] }),
            z
              .object({
                portfolios: z
                  .array(
                    z
                      .object({
                        portfolioValues: z
                          .array(z.number().positive())
                          .min(2)
                          .openapi({
                            description:
                              'portfolioValues[t] is the value of the portfolio at the time t',
                          }),
                      })
                      .openapi({ required: ['portfolioValues'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['portfolios'] }),
          ]),
          examples: {
            'From asset covariance matrix': {
              description:
                'Compute the volatility of 2 portfolios based on the assets covariance matrix',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                portfolios: [{ assetsWeights: [1, 0] }, { assetsWeights: [0, 1] }],
              },
            },
            'From portfolio values': {
              description: 'Compute the volatility of a portfolio based on portfolio values',
              value: { portfolios: [{ portfolioValues: [100, 95, 100, 90, 85, 70] }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      portfolioVolatility: z
                        .number()
                        .min(0)
                        .openapi({ description: 'The volatility of the portfolio' }),
                    })
                    .openapi({ required: ['portfolioVolatility'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Computed volatility of 2 portfolios',
              value: { portfolios: [{ portfolioVolatility: 0.05 }, { portfolioVolatility: 0.1 }] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioConstructionInvestableRoute = createRoute({
  method: 'post',
  path: '/portfolio/construction/investable',
  tags: ['Portfolio Construction'],
  summary: 'Investable Portfolio',
  description:
    'Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:\n* The desired assets weights\n* The desired assets groups weights\n* The desired maximum assets groups weights\n* The prices of the assets\n* The portfolio value\n* The requirement to purchase some assets by round lots or by odd lots\n* The possibility to purchase some assets by a fractional quantity of shares\n* The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets\n\nReferences\n* [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsGroups: z
                .array(
                  z
                    .array(z.int().min(1))
                    .min(2)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    })
                    .openapi({
                      description:
                        'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; requires either assetsGroupsWeights or maximumAssetsGroupsWeights to be present',
                    }),
                )
                .min(1)
                .exactOptional(),
              assetsGroupsWeights: z
                .array(z.number().min(0).max(1))
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present',
                }),
              assetsMinimumNotionalValues: z
                .array(z.number().min(0).default(0))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio',
                }),
              assetsMinimumPositions: z
                .array(z.number().positive().default(1))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots)',
                }),
              assetsPrices: z
                .array(z.number().positive())
                .min(2)
                .openapi({ description: 'assetsPrices[i] is the price of the asset i' }),
              assetsSizeLots: z
                .array(z.number().positive().default(1))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares)',
                }),
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire)',
                }),
              maximumAssetsGroupsWeights: z
                .array(z.number().min(0).max(1))
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present',
                }),
              portfolioValue: z
                .number()
                .positive()
                .openapi({ description: 'The monetary value of the portfolio' }),
            })
            .openapi({ required: ['assets', 'assetsPrices', 'portfolioValue'] }),
          examples: {
            'Example (groups weights)': {
              description:
                'Construct an investable portfolio of 10,000$ made of 4 assets with assets groups weights',
              value: {
                assets: 4,
                assetsGroups: [
                  [1, 2],
                  [3, 4],
                ],
                assetsGroupsWeights: [0.4, 0.4],
                assetsPrices: [10, 25, 100, 500],
                assetsWeights: [0.2, null, null, null],
                portfolioValue: 10000,
              },
            },
            'Example (no groups weights)': {
              description: 'Construct an investable portfolio of 10,000$ made of 3 assets',
              value: {
                assets: 3,
                assetsPrices: [10, 25, 500],
                assetsWeights: [0.05, 0.6, 0.35],
                portfolioValue: 10000,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsPositions: z
                .array(z.number().min(0))
                .min(2)
                .openapi({
                  description:
                    'assetsPositions[i] is the number of shares of the asset i in the portfolio',
                }),
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsPositions', 'assetsWeights'] }),
          examples: {
            'Example (groups weights)': {
              description: 'Computed investable portfolio with 4 assets not fully invested',
              value: { assetsPositions: [200, 80, 20, 4], assetsWeights: [0.2, 0.2, 0.2, 0.2] },
            },
            'Example (no groups weights)': {
              description: 'Computed investable portfolio with 3 assets fully invested',
              value: { assetsPositions: [50, 240, 7], assetsWeights: [0.05, 0.6, 0.35] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioConstructionMimickingRoute = createRoute({
  method: 'post',
  path: '/portfolio/construction/mimicking',
  tags: ['Portfolio Construction'],
  summary: 'Mimicking Portfolio',
  description:
    'Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:\n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences \n* Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetReturns: z
                        .array(z.number())
                        .min(2)
                        .openapi({
                          description:
                            'assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length',
                        }),
                    })
                    .openapi({ required: ['assetReturns'] }),
                )
                .min(2),
              benchmarkReturns: z
                .array(z.number())
                .min(2)
                .openapi({
                  description:
                    'benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the assetReturns arrays',
                }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'benchmarkReturns'] }),
          examples: {
            Example: {
              description:
                'Construct a portfolio mimicking a benchmark with null returns, using 2 assets with opposite returns',
              value: {
                assets: [
                  { assetReturns: [0.01, 0.02, 0.03] },
                  { assetReturns: [-0.01, -0.02, -0.03] },
                ],
                benchmarkReturns: [0, 0, 0],
              },
            },
            'Example with group constraints': {
              description:
                'Construct a portfolio mimicking a benchmark using 3 assets and the constraint that the first two assets taken together cannot represent more than 35% of the portfolio',
              value: {
                assets: [
                  { assetReturns: [0.01, 0.02, 0.03] },
                  { assetReturns: [-0.01, 0.04, 0.01] },
                  { assetReturns: [0.05, -0.01, 0] },
                ],
                benchmarkReturns: [0.02, 0.01, 0.06],
                constraints: { assetsGroups: [[1, 2]], maximumAssetsGroupsWeights: [0.35] },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Constructed mimicking portfolio is invested equally in the 2 assets',
              value: { assetsWeights: [0.5, 0.5] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioConstructionRandomRoute = createRoute({
  method: 'post',
  path: '/portfolio/construction/random',
  tags: ['Portfolio Construction'],
  summary: 'Random Portfolio',
  description:
    'Construct one or several random portfolio(s), optionally subject to:       \n* Minimum and maximum weights constraints\n* Minimum and maximum portfolio exposure constraints\n\n> Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.\n\nReferences\n* [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(1).openapi({ description: 'The number of assets' }),
              constraints: z
                .object({
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              portfolios: z
                .int()
                .min(1)
                .default(25)
                .exactOptional()
                .openapi({ description: 'The number of portfolios to construct' }),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Construct 2 random portfolios, each made of 3 assets',
              value: { assets: 3, portfolios: 2 },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(1)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Constructed 2 random portfolios, each made of 3 assets',
              value: {
                portfolios: [
                  {
                    assetsWeights: [0.11429744284625785, 0.0038592674702259393, 0.8818432896835162],
                  },
                  { assetsWeights: [0.546026607601722, 0.07707923859010406, 0.376894153808174] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationEqualRiskContributionsRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/equal-risk-contributions',
  tags: ['Portfolio Optimization'],
  summary: 'Equal Risk Contributions Portfolio',
  description:
    'Compute the asset weights of the equal risk contributions portfolio, optionally subject to:  \n* Minimum and maximum weights constraints  \n\nReferences\n * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              constraints: z
                .object({
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights constraints',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: { maximumAssetsWeights: [0.4, 1] },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed equal risk contributions portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.5999975015091795] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationEqualSharpeRatioContributionsRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/equal-sharpe-ratio-contributions',
  tags: ['Portfolio Optimization'],
  summary: 'Equal Sharpe Ratio Contributions Portfolio',
  description:
    'Compute the asset weights of the equal Sharpe Ratio contributions portfolio.\n\nReferences\n * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(2)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'riskFreeRate', 'assetsCovarianceMatrix'],
            }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.05, 0.02],
                  [0.02, 0.07],
                ],
                assetsReturns: [0.05, 0.1],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 2 assets',
              value: { assetsWeights: [0.6666666666666666, 0.3333333333333333] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationEqualVolatilityWeightedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/equal-volatility-weighted',
  tags: ['Portfolio Optimization'],
  summary: 'Equal Volatility Weighted Portfolio',
  description:
    'Compute the asset weights of the equal volatility-weighted portfolio.\n\nReferences\n * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsVolatilities: z
                .array(z.number().min(0))
                .min(2)
                .openapi({ description: 'assetsVolatilities[i] is the volatility of the asset i' }),
            })
            .openapi({ required: ['assets', 'assetsVolatilities'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with volatilities equal to 0.05 and 0.1',
              value: { assets: 2, assetsVolatilities: [0.05, 0.1] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed equal volatility-weighted portfolio of 2 assets',
              value: { assetsWeights: [0.3333333333333333, 0.6666666666666666] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationEqualWeightedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/equal-weighted',
  tags: ['Portfolio Optimization'],
  summary: 'Equal Weighted Portfolio',
  description:
    'Compute the asset weights of the equal-weighted portfolio.\n\nReferences\n * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ assets: z.int().min(2).openapi({ description: 'The number of assets' }) })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets',
              value: { assets: 2 },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed equal-weighted portfolio of 2 assets',
              value: { assetsWeights: [0.5, 0.5] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationHierarchicalRiskParityRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/hierarchical-risk-parity',
  tags: ['Portfolio Optimization'],
  summary: 'Hierarchical Risk Parity Portfolio',
  description:
    'Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)\n * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              clusteringMethod: z
                .enum(['singleLinkage', 'averageLinkage', 'completeLinkage', 'wardLinkage'])
                .default('singleLinkage')
                .exactOptional()
                .openapi({ description: 'The hierarchical clustering method to use' }),
              clusteringOrdering: z
                .enum(['r-hclust', 'optimal'])
                .default('r-hclust')
                .exactOptional()
                .openapi({
                  description: 'The order to impose on the hierarchical clustering tree leaves',
                }),
              constraints: z
                .object({
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights and portfolio exposure constraints',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: {
                  maximumAssetsWeights: [0.4, 1],
                  maximumPortfolioExposure: 0.5,
                  minimumPortfolioExposure: 0.5,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.09999999999998999] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationHierarchicalRiskParityClusteringBasedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/hierarchical-risk-parity/clustering-based',
  tags: ['Portfolio Optimization'],
  summary: 'Hierarchical Clustering-Based Risk Parity Portfolio',
  description:
    'Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)\n * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)\n * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)\n * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              acrossClusterAllocationMethod: z
                .enum(['equalWeighting', 'inverseVolatility', 'inverseVariance'])
                .default('equalWeighting')
                .exactOptional()
                .openapi({ description: 'The allocation method to use across clusters' }),
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              clusteringMethod: z
                .enum(['singleLinkage', 'averageLinkage', 'completeLinkage', 'wardLinkage'])
                .default('wardLinkage')
                .exactOptional()
                .openapi({ description: 'The hierarchical clustering method to use' }),
              clusteringOrdering: z
                .enum(['r-hclust', 'optimal'])
                .default('r-hclust')
                .exactOptional()
                .openapi({
                  description: 'The order to impose on the hierarchical clustering tree leaves',
                }),
              clusters: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference',
                }),
              constraints: z
                .object({
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              withinClusterAllocationMethod: z
                .enum(['equalWeighting', 'inverseVolatility', 'inverseVariance'])
                .default('equalWeighting')
                .exactOptional()
                .openapi({ description: 'The allocation method to use within clusters' }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights and portfolio exposure constraints',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: {
                  maximumAssetsWeights: [0.4, 1],
                  maximumPortfolioExposure: 0.5,
                  minimumPortfolioExposure: 0.5,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.09999999999998999] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationInverseVarianceWeightedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/inverse-variance-weighted',
  tags: ['Portfolio Optimization'],
  summary: 'Inverse Variance Weighted Portfolio',
  description:
    'Compute the asset weights of the inverse variance-weighted portfolio.\n\nReferences\n * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsVariances: z
                .array(z.number().min(0))
                .min(2)
                .openapi({ description: 'assetsVariances[i] is the variance of the asset i' }),
            })
            .openapi({ required: ['assets', 'assetsVariances'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with variances equal to 1 and 0.5',
              value: { assets: 2, assetsVariances: [1, 0.5] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed inverse variance-weighted portfolio of 2 assets',
              value: { assetsWeights: [0.3333333333333333, 0.6666666666666666] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationInverseVolatilityWeightedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/inverse-volatility-weighted',
  tags: ['Portfolio Optimization'],
  summary: 'Inverse Volatility Weighted Portfolio',
  description:
    'Compute the asset weights of the inverse volatility-weighted portfolio.\n\nReferences\n * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsVolatilities: z
                .array(z.number().min(0))
                .min(2)
                .openapi({ description: 'assetsVolatilities[i] is the volatility of the asset i' }),
            })
            .openapi({ required: ['assets', 'assetsVolatilities'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with volatilities equal to 0.05 and 0.1',
              value: { assets: 2, assetsVolatilities: [0.05, 0.1] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed inverse volatility-weighted portfolio of 2 assets',
              value: { assetsWeights: [0.6666666666666666, 0.3333333333333333] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMarketCapitalizationWeightedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/market-capitalization-weighted',
  tags: ['Portfolio Optimization'],
  summary: 'Market Capitalization Weighted Portfolio',
  description:
    'Compute the asset weights of the market capitalization-weighted portfolio.\n\nReferences\n * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsMarketCapitalizations: z
                .array(z.number().min(0))
                .min(2)
                .openapi({
                  description:
                    'assetsMarketCapitalizations[i] is the market capitalization of the asset i',
                }),
            })
            .openapi({ required: ['assets', 'assetsMarketCapitalizations'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with market capitalizations equal to 1 and 2',
              value: { assets: 2, assetsMarketCapitalizations: [1, 2] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed market capitalization-weighted portfolio of 2 assets',
              value: { assetsWeights: [0.3333333333333333, 0.6666666666666666] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumDecorrelationRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-decorrelation',
  tags: ['Portfolio Optimization'],
  summary: 'Maximum Decorrelation Portfolio',
  description:
    'Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .exactOptional()
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 3 assets',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.9, 0.85],
                  [0.9, 1, 0.7],
                  [0.85, 0.7, 1],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed maximum decorrelation portfolio of 3 assets',
              value: { assetsWeights: [0, 0.5, 0.5] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumReturnRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-return',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Maximum Return Portfolio',
  description:
    'Compute the asset weights of the maximum return portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsReturns'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights constraints',
              value: {
                assets: 2,
                assetsReturns: [0.02, 0.01],
                constraints: { maximumAssetsWeights: [0.4, 1] },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed maximum return portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.6] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumReturnDiversifiedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-return/diversified',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Diversified Maximum Return Portfolio',
  description:
    'Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nThe diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.\n\nReferences\n * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)\n * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  deltaReturn: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the maximum return portfolio return',
                    }),
                  deltaVolatility: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the maximum return portfolio volatility, if applicable',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsReturns'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights constraints',
              value: {
                assets: 2,
                assetsReturns: [0.02, 0.01],
                constraints: { maximumAssetsWeights: [0.4, 1] },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed diversified maximum return portfolio of 2 assets',
              value: { assetsWeights: [0.3999998369710335, 0.6000001630289665] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumReturnSubsetResamplingBasedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-return/subset-resampling-based',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Subset Resampling-Based Maximum Return Portfolio',
  description:
    'Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)\n * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              subsetPortfolios: z
                .int()
                .min(1)
                .default(128)
                .exactOptional()
                .openapi({
                  description:
                    'The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling',
                }),
              subsetPortfoliosAggregationMethod: z
                .enum(['average', 'median'])
                .default('average')
                .exactOptional()
                .openapi({ description: 'The method to aggregate the subset portfolios' }),
              subsetPortfoliosEnumerationMethod: z
                .enum(['complete', 'randomSampling'])
                .default('randomSampling')
                .exactOptional()
                .openapi({ description: 'The method to enumerate the subset portfolios' }),
              subsetSize: z
                .int()
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets',
                }),
            })
            .openapi({ required: ['assets', 'assetsReturns'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 3 assets, with complete enumeration of subsets',
              value: {
                assets: 3,
                assetsReturns: [0.01, 0.02, 0.03],
                subsetPortfoliosEnumerationMethod: 'complete',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio of 3 assets',
              value: { assetsWeights: [0, 0.3333333333333333, 0.6666666666666666] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumSharpeRatioRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-sharpe-ratio',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Maximum Sharpe Ratio Portfolio',
  description:
    'Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'riskFreeRate'],
            }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets with a risk free rate of 0%',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.05, 0.02],
                  [0.02, 0.07],
                ],
                assetsReturns: [0.05, 0.1],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 2 assets',
              value: { assetsWeights: [0.27272727272727276, 0.7272727272727273] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumSharpeRatioDiversifiedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-sharpe-ratio/diversified',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Diversified Maximum Sharpe Ratio Portfolio',
  description:
    'Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nThe diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.\n\nReferences\n * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)\n * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  deltaReturn: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the maximum Sharpe ratio portfolio return',
                    }),
                  deltaVolatility: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the maximum Sharpe ratio portfolio volatility',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'riskFreeRate'],
            }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets with a risk free rate of 0%',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.05, 0.02],
                  [0.02, 0.07],
                ],
                assetsReturns: [0.05, 0.1],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 2 assets',
              value: { assetsWeights: [0.44545623478220464, 0.5545437652177954] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Subset Resampling-Based Maximum Sharpe Ratio Portfolio',
  description:
    'Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)\n * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
              subsetPortfolios: z
                .int()
                .min(1)
                .default(128)
                .exactOptional()
                .openapi({
                  description:
                    'The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling',
                }),
              subsetPortfoliosAggregationMethod: z
                .enum(['average', 'median'])
                .default('average')
                .exactOptional()
                .openapi({ description: 'The method to aggregate the subset portfolios' }),
              subsetPortfoliosEnumerationMethod: z
                .enum(['complete', 'randomSampling'])
                .default('randomSampling')
                .exactOptional()
                .openapi({ description: 'The method to enumerate the subset portfolios' }),
              subsetSize: z
                .int()
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets',
                }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'riskFreeRate'],
            }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets with a risk free rate of 0%',
              value: {
                assets: 3,
                assetsCovarianceMatrix: [
                  [0.05, 0.02, 0],
                  [0.02, 0.07, 0.5],
                  [0, 0.5, 0.1],
                ],
                assetsReturns: [0.05, 0.1, 0.025],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 3 assets',
              value: {
                assetsWeights: [0.35454545454545444, 0.5845170454545454, 0.06093750000000007],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMaximumUlcerPerformanceIndexRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/maximum-ulcer-performance-index',
  tags: ['Portfolio Optimization'],
  summary: 'Maximum Ulcer Performance Index Portfolio',
  description:
    'Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nNotes:  \n* This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index\n\nReferences\n * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)\n * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)\n * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              riskFreeRate: z.number().openapi({ description: 'The risk free rate' }),
            })
            .openapi({ required: ['assets', 'riskFreeRate'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets with a risk free rate of 0%',
              value: {
                assets: [{ assetPrices: [100, 95, 110] }, { assetPrices: [100, 105, 100] }],
                riskFreeRate: 0,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 2 assets',
              value: { assetsWeights: [0.3101913068855954, 0.6898086931144047] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMeanVarianceEfficientRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/mean-variance-efficient',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Mean-Variance Efficient Portfolio',
  description:
    'Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\n> A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                  portfolioReturn: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio return; exclusive with portfolioVolatility and riskTolerance',
                    }),
                  portfolioVolatility: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio volatility; exclusive with portfolioReturn and riskTolerance',
                    }),
                  riskTolerance: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility',
                    }),
                })
                .openapi({ required: [] }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'constraints'],
            }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with a portfolio return constraint of 15%',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [1, 0.3],
                  [0.3, 1],
                ],
                assetsReturns: [0.1, 0.2],
                constraints: { portfolioReturn: 0.15 },
              },
            },
            'Example with group constraints': {
              description:
                'Compute the portfolio weights for 3 assets with a maximum group weights constraint and a portfolio return constraint of 15%',
              value: {
                assets: 3,
                assetsCovarianceMatrix: [
                  [1, 0.3, -0.2],
                  [0.3, 1, 0.2],
                  [-0.2, 0.2, 1],
                ],
                assetsReturns: [0.1, 0.2, 0.15],
                constraints: {
                  assetsGroups: [[1, 2]],
                  maximumAssetsGroupsWeights: [0.5],
                  portfolioReturn: 0.15,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed mean-variance efficient portfolio of 2 assets',
              value: { assetsWeights: [0.5, 0.5] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMeanVarianceEfficientDiversifiedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/mean-variance-efficient/diversified',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Diversified Mean-Variance Efficient Portfolio',
  description:
    'Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nThe diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.\n\n> A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.\n\nReferences\n * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)\n * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  deltaReturn: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the mean-variance efficient portfolio return',
                    }),
                  deltaVolatility: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the mean-variance efficient portfolio volatility',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                  portfolioReturn: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio return; exclusive with portfolioVolatility and riskTolerance',
                    }),
                  portfolioVolatility: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio volatility; exclusive with portfolioReturn and riskTolerance',
                    }),
                  riskTolerance: z
                    .number()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description:
                        'The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility',
                    }),
                })
                .openapi({ required: [] }),
            })
            .openapi({
              required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'constraints'],
            }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets with a portfolio return constraint of 15%',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [1, 0.3],
                  [0.3, 1],
                ],
                assetsReturns: [0.1, 0.2],
                constraints: { deltaReturn: 0.05, deltaVolatility: 0.05, portfolioReturn: 0.175 },
              },
            },
            'Example with group constraints': {
              description:
                'Compute the portfolio weights for 3 assets with a maximum group weights constraint and a portfolio return constraint of 15%',
              value: {
                assets: 3,
                assetsCovarianceMatrix: [
                  [1, 0.3, -0.2],
                  [0.3, 1, 0.2],
                  [-0.2, 0.2, 1],
                ],
                assetsReturns: [0.1, 0.2, 0.15],
                constraints: {
                  assetsGroups: [[1, 2]],
                  maximumAssetsGroupsWeights: [0.5],
                  portfolioReturn: 0.15,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed diversified mean-variance efficient portfolio of 2 assets',
              value: { assetsWeights: [0.3375016499673578, 0.6624983500326422] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRoute = createRoute(
  {
    method: 'post',
    path: '/portfolio/optimization/mean-variance-efficient/subset-resampling-based',
    tags: ['Portfolio Optimization / Mean-Variance'],
    summary: 'Subset Resampling-Based Mean-Variance Efficient Portfolio',
    description:
      'Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)\n * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
    request: {
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                assets: z.int().min(2).openapi({ description: 'The number of assets' }),
                assetsCovarianceMatrix: z
                  .array(z.array(z.number()).min(2))
                  .min(2)
                  .openapi({
                    description:
                      'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                  }),
                assetsReturns: z
                  .array(z.number())
                  .min(1)
                  .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
                constraints: z
                  .object({
                    assetsGroups: z
                      .array(
                        z
                          .array(z.int().min(1))
                          .min(2)
                          .superRefine((items, ctx) => {
                            const seen = new Map()
                            for (const [i, val] of items.entries()) {
                              const key = JSON.stringify(val)
                              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                              else seen.set(key, i)
                            }
                          })
                          .openapi({
                            description:
                              'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                          }),
                      )
                      .min(1)
                      .exactOptional(),
                    assetsGroupsMatrix: z
                      .array(z.array(z.number()).min(2))
                      .min(1)
                      .exactOptional()
                      .openapi({
                        description:
                          'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                      }),
                    maximumAssetsGroupsWeights: z
                      .array(z.number())
                      .exactOptional()
                      .openapi({
                        description:
                          'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                      }),
                    maximumAssetsWeights: z
                      .array(z.number().min(0).max(1))
                      .exactOptional()
                      .openapi({
                        description:
                          'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                      }),
                    maximumPortfolioExposure: z
                      .number()
                      .min(0)
                      .max(1)
                      .default(1)
                      .exactOptional()
                      .openapi({
                        description:
                          'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                      }),
                    minimumAssetsWeights: z
                      .array(z.number().min(0).max(1))
                      .exactOptional()
                      .openapi({
                        description:
                          'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                      }),
                    minimumPortfolioExposure: z
                      .number()
                      .min(0)
                      .max(1)
                      .default(1)
                      .exactOptional()
                      .openapi({
                        description:
                          'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                      }),
                    portfolioReturn: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'The portfolio return; exclusive with portfolioVolatility and riskTolerance',
                      }),
                    portfolioVolatility: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        description:
                          'The portfolio volatility; exclusive with portfolioReturn and riskTolerance',
                      }),
                    riskTolerance: z
                      .number()
                      .min(0)
                      .exactOptional()
                      .openapi({
                        description:
                          'The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility',
                      }),
                  })
                  .openapi({ required: [] }),
                subsetPortfolios: z
                  .int()
                  .min(1)
                  .default(128)
                  .exactOptional()
                  .openapi({
                    description:
                      'The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling',
                  }),
                subsetPortfoliosAggregationMethod: z
                  .enum(['average', 'median'])
                  .default('average')
                  .exactOptional()
                  .openapi({ description: 'The method to aggregate the subset portfolios' }),
                subsetPortfoliosEnumerationMethod: z
                  .enum(['complete', 'randomSampling'])
                  .default('randomSampling')
                  .exactOptional()
                  .openapi({ description: 'The method to enumerate the subset portfolios' }),
                subsetSize: z
                  .int()
                  .min(2)
                  .exactOptional()
                  .openapi({
                    description:
                      'The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets',
                  }),
              })
              .openapi({
                required: ['assets', 'assetsReturns', 'assetsCovarianceMatrix', 'constraints'],
              }),
            examples: {
              Example: {
                description:
                  'Compute the portfolio weights for 3 assets with a risk tolerance constraint of 2',
                value: {
                  assets: 3,
                  assetsCovarianceMatrix: [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1],
                  ],
                  assetsReturns: [0.1, 0.2, 0.3],
                  constraints: { riskTolerance: 2 },
                },
              },
            },
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: z
              .object({
                assetsWeights: z
                  .array(z.number().min(0).max(1))
                  .min(2)
                  .openapi({
                    description:
                      'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                  }),
              })
              .openapi({ required: ['assetsWeights'] }),
            examples: {
              Example: {
                description: 'Computed portfolio of 3 assets',
                value: { assetsWeights: [0.24609375, 0.3125, 0.44140624999999994] },
              },
            },
          },
        },
      },
    },
  },
)

export const postPortfolioOptimizationMinimumCorrelationRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/minimum-correlation',
  tags: ['Portfolio Optimization'],
  summary: 'Minimum Correlation Portfolio',
  description:
    'Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).\n\nReferences\n * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2),
              assetsCorrelationMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided',
                }),
              assetsVolatilities: z
                .array(z.number().min(0))
                .min(2)
                .openapi({
                  description:
                    'assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided',
                }),
            })
            .openapi({ required: ['assets', 'assetsCorrelationMatrix', 'assetsVolatilities'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 3 assets',
              value: {
                assets: 3,
                assetsCorrelationMatrix: [
                  [1, 0.9, 0.85],
                  [0.9, 1, 0.7],
                  [0.85, 0.7, 1],
                ],
                assetsVolatilities: [0.14, 0.18, 0.22],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed minimum correlation portfolio portfolio of 3 assets',
              value: {
                assetsWeights: [0.21059806981924115, 0.3087866303991204, 0.48061529978163836],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMinimumUlcerIndexRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/minimum-ulcer-index',
  tags: ['Portfolio Optimization'],
  summary: 'Minimum Ulcer Index Portfolio',
  description:
    'Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)\n * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)\n * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets',
              value: {
                assets: [{ assetPrices: [100, 95, 110] }, { assetPrices: [100, 105, 100] }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio weights for 2 assets',
              value: { assetsWeights: [0.24615095383708674, 0.7538490461629133] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMinimumVarianceRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/minimum-variance',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Minimum Variance Portfolio',
  description:
    'Compute the asset weights of the minimum variance portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .exactOptional()
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights and portfolio exposure constraints',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: {
                  maximumAssetsWeights: [0.4, 1],
                  maximumPortfolioExposure: 0.5,
                  minimumPortfolioExposure: 0.5,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed minimum variance portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.09999999999998999] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMinimumVarianceDiversifiedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/minimum-variance/diversified',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Diversified Minimum Variance Portfolio',
  description:
    'Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nThe diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.\n\nReferences\n * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)\n * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .exactOptional()
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  deltaReturn: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the minimum variance portfolio return, if applicable',
                    }),
                  deltaVolatility: z
                    .number()
                    .min(0)
                    .default(0.1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The relative tolerance over the minimum variance portfolio volatility',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights and portfolio exposure constraints',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: {
                  maximumAssetsWeights: [0.4, 1],
                  maximumPortfolioExposure: 0.5,
                  minimumPortfolioExposure: 0.5,
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed diversified minimum variance portfolio of 2 assets',
              value: { assetsWeights: [0.31288809725799416, 0.18711190967754268] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/minimum-variance/subset-resampling-based',
  tags: ['Portfolio Optimization / Mean-Variance'],
  summary: 'Subset Resampling-Based Minimum Variance Portfolio',
  description:
    'Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)\n * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)\n * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              assetsReturns: z
                .array(z.number())
                .min(1)
                .exactOptional()
                .openapi({ description: 'assetsReturns[i] is the arithmetic return of asset i' }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              subsetPortfolios: z
                .int()
                .min(1)
                .default(128)
                .exactOptional()
                .openapi({
                  description:
                    'The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling',
                }),
              subsetPortfoliosAggregationMethod: z
                .enum(['average', 'median'])
                .default('average')
                .exactOptional()
                .openapi({ description: 'The method to aggregate the subset portfolios' }),
              subsetPortfoliosEnumerationMethod: z
                .enum(['complete', 'randomSampling'])
                .default('randomSampling')
                .exactOptional()
                .openapi({ description: 'The method to enumerate the subset portfolios' }),
              subsetSize: z
                .int()
                .min(2)
                .exactOptional()
                .openapi({
                  description:
                    'The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets',
                }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description:
                'Compute the portfolio weights for 2 assets, with maximum assets weights and portfolio exposure constraints; because of only 2 assets, the computed portfolio will be identical to the equivalent minimum variance portfolio',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.0025, 0.0005],
                  [0.0005, 0.01],
                ],
                constraints: {
                  maximumAssetsWeights: [0.4, 1],
                  maximumPortfolioExposure: 0.5,
                  minimumPortfolioExposure: 0.5,
                },
                subsetPortfolios: 1,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed portfolio of 2 assets',
              value: { assetsWeights: [0.4, 0.09999999999998999] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioOptimizationMostDiversifiedRoute = createRoute({
  method: 'post',
  path: '/portfolio/optimization/most-diversified',
  tags: ['Portfolio Optimization'],
  summary: 'Most Diversified Portfolio',
  description:
    'Compute the asset weights of the most diversified portfolio, optionally subject to:  \n* Minimum and maximum weights constraints\n* Maximum group weights constraints\n* Minimum and maximum portfolio exposure constraints\n\nReferences\n * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z.int().min(2).openapi({ description: 'The number of assets' }),
              assetsCovarianceMatrix: z
                .array(z.array(z.number()).min(2))
                .min(2)
                .openapi({
                  description:
                    'assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j',
                }),
              constraints: z
                .object({
                  assetsGroups: z
                    .array(
                      z
                        .array(z.int().min(1))
                        .min(2)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .openapi({
                          description:
                            'assetsGroups[k] is the indexes of the assets belonging to the assets group k in the portfolio; exclusive with assetsGroupsMatrix',
                        }),
                    )
                    .min(1)
                    .exactOptional(),
                  assetsGroupsMatrix: z
                    .array(z.array(z.number()).min(2))
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups',
                    }),
                  maximumAssetsGroupsWeights: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided',
                    }),
                  maximumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage',
                    }),
                  maximumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure',
                    }),
                  minimumAssetsWeights: z
                    .array(z.number().min(0).max(1))
                    .exactOptional()
                    .openapi({
                      description:
                        'minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage',
                    }),
                  minimumPortfolioExposure: z
                    .number()
                    .min(0)
                    .max(1)
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['assets', 'assetsCovarianceMatrix'] }),
          examples: {
            Example: {
              description: 'Compute the portfolio weights for 2 assets',
              value: {
                assets: 2,
                assetsCovarianceMatrix: [
                  [0.04, 0.01],
                  [0.01, 0.01],
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              assetsWeights: z
                .array(z.number().min(0).max(1))
                .min(2)
                .openapi({
                  description:
                    'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                }),
            })
            .openapi({ required: ['assetsWeights'] }),
          examples: {
            Example: {
              description: 'Computed most diversified portfolio of 2 assets',
              value: { assetsWeights: [0.33333333333333337, 0.6666666666666666] },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioSimulationRebalancingDriftWeightRoute = createRoute({
  method: 'post',
  path: '/portfolio/simulation/rebalancing/drift-weight',
  tags: ['Portfolio Simulation'],
  summary: 'Drift-weight Portfolio Rebalancing',
  description:
    'Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).\n\nReferences\n* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(1)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets', 'portfolios'] }),
          examples: {
            Example: {
              description:
                'Simulate 3 buy and hold portfolios, each made of 3 assets with only one asset invested',
              value: {
                assets: [
                  { assetPrices: [100, 105, 110] },
                  { assetPrices: [15, 12.5, 11.25] },
                  { assetPrices: [0.5, 0.51, 0.49] },
                ],
                portfolios: [
                  { assetsWeights: [1, 0, 0] },
                  { assetsWeights: [0, 1, 0] },
                  { assetsWeights: [0, 0, 1] },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioValues: z
                      .array(z.number().min(0))
                      .openapi({
                        description:
                          'portfolioValues[t] is the value of the portfolio at the time t',
                      }),
                  })
                  .openapi({ required: ['portfolioValues'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Simulated portfolios over 2 time periods',
              value: {
                portfolios: [
                  { portfolioValues: [100, 105, 110] },
                  { portfolioValues: [100, 83.33333333333334, 75] },
                  { portfolioValues: [100, 102, 98] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioSimulationRebalancingFixedWeightRoute = createRoute({
  method: 'post',
  path: '/portfolio/simulation/rebalancing/fixed-weight',
  tags: ['Portfolio Simulation'],
  summary: 'Fixed-weight Portfolio Rebalancing',
  description:
    'Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.\n\nReferences\n* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        \n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
              portfolios: z
                .array(
                  z
                    .object({
                      assetsWeights: z
                        .array(z.number().min(0).max(1))
                        .min(1)
                        .openapi({
                          description:
                            'assetsWeights[i] is the weight of the asset i in the portfolio, in percentage',
                        }),
                    })
                    .openapi({ required: ['assetsWeights'] }),
                )
                .min(1),
            })
            .openapi({ required: ['assets', 'portfolios'] }),
          examples: {
            Example: {
              description:
                'Simulate 3 portfolios, each rebalanced toward the provided assets weights at the beginning of each of the 2 time periods',
              value: {
                assets: [
                  { assetPrices: [100, 105, 110] },
                  { assetPrices: [15, 12.5, 11.25] },
                  { assetPrices: [0.5, 0.51, 0.49] },
                ],
                portfolios: [
                  { assetsWeights: [0.5, 0.5, 0] },
                  { assetsWeights: [0, 0.5, 0.5] },
                  { assetsWeights: [0.5, 0, 0.5] },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioValues: z
                      .array(z.number().min(0))
                      .openapi({
                        description:
                          'portfolioValues[t] is the value of the portfolio at the time t',
                      }),
                  })
                  .openapi({ required: ['portfolioValues'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Simulated portfolios over 2 time periods',
              value: {
                portfolios: [
                  { portfolioValues: [100, 94.16666666666667, 91.70039682539684] },
                  { portfolioValues: [100, 92.66666666666667, 86.21633986928106] },
                  { portfolioValues: [100, 103.5, 103.93487394957984] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postPortfolioSimulationRebalancingRandomWeightRoute = createRoute({
  method: 'post',
  path: '/portfolio/simulation/rebalancing/random-weight',
  tags: ['Portfolio Simulation'],
  summary: 'Random-weight Portfolio Rebalancing',
  description:
    'Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.\n\nReferences\n* [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)\n',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assets: z
                .array(
                  z
                    .object({
                      assetPrices: z
                        .array(z.number().positive())
                        .min(2)
                        .openapi({
                          description: 'assetPrices[t] is the price of the asset at the time t',
                        }),
                    })
                    .openapi({ required: ['assetPrices'] }),
                )
                .min(1),
              portfolios: z
                .int()
                .min(1)
                .default(25)
                .exactOptional()
                .openapi({ description: 'The number of portfolios to simulate' }),
            })
            .openapi({ required: ['assets'] }),
          examples: {
            Example: {
              description:
                'Simulate 2 portfolios each rebalanced toward random assets weights at the beginning of each of the 2 time periods',
              value: {
                assets: [
                  { assetPrices: [100, 105, 110] },
                  { assetPrices: [15, 12.5, 11.25] },
                  { assetPrices: [0.5, 0.51, 0.49] },
                ],
                portfolios: 2,
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              portfolios: z.array(
                z
                  .object({
                    portfolioValues: z
                      .array(z.number().min(0))
                      .openapi({
                        description:
                          'portfolioValues[t] is the value of the portfolio at the time t',
                      }),
                  })
                  .openapi({ required: ['portfolioValues'] }),
              ),
            })
            .openapi({ required: ['portfolios'] }),
          examples: {
            Example: {
              description: 'Simulated portfolios over 2 time periods',
              value: {
                portfolios: [
                  { portfolioValues: [100, 90.8178403620342, 84.65407625993741] },
                  { portfolioValues: [100, 102.43258698946813, 101.32419718013273] },
                ],
              },
            },
          },
        },
      },
    },
  },
})
