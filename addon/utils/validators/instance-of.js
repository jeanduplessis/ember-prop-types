/**
 * The PropTypes.instanceOf validator
 */
import Ember from 'ember'
const {typeOf} = Ember
import logger from '../logger'

export default function (ctx, name, value, def, logErrors, throwErrors) {
  const type = def.typeDef
  const valid = value instanceof type

  if (!valid && logErrors) {
    const nameOfType = type.toString().match(/function (\w*)/)[1]
    logger.warn(
      ctx,
      `Expected property ${name} to be an instance of ${nameOfType} but instead got: ${typeOf(value)}`,
      throwErrors
    )
  }

  return valid
}
