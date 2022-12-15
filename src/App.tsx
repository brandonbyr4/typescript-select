import { useState } from "react"
import { Select, SelectOption } from "./select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

export default function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <div className="App">
      {/* Single select uses value2, one instance of the value1 array */}
      <Select
        options={options}
        value={value2}
        onChange={o => setValue2(o)}
      />
      {/* multiple select uses value1, the fulla array */}
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
    </div>
  );
}
