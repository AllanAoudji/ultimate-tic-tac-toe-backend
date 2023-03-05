import { app } from "@src/app";
import { PORT } from "@src/config";

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen on port ${PORT}.`);

  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
