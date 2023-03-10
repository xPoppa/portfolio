import { parseISO, format } from "date-fns";

import React from "react";

interface DateString {
  dateString: string;
}

function Date({ dateString }: DateString): JSX.Element {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
}

export default Date;
