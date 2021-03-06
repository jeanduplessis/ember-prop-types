/**
 * The PropTypes.string validator
 */

import {isHTMLSafe} from '@ember/string'
import {typeOf} from '@ember/utils'

import logger from '../logger'

export default function (ctx, name, value, def, logErrors, throwErrors) {
  const valid = typeOf(value) === 'string' || isHTMLSafe(value)

  if (!valid && logErrors) {
    logger.warn(ctx, `Expected property ${name} to be a string but instead got: ${typeOf(value)}`, throwErrors)
  }

  return valid
}
