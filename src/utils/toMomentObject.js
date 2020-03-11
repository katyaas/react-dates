import moment from 'moment';

import { DISPLAY_FORMAT, ISO_FORMAT } from '../constants';

export default function toMomentObject(dateString, customFormat) {
  const dateFormats = customFormat
    ? customFormat
    : [DISPLAY_FORMAT, ISO_FORMAT];

  const date = moment.utc(dateString, dateFormats, true);
  return date.isValid() ? date : null;
}
