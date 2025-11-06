type GreetingProps = {
  name: string;
  age: number;
};

export const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <div>
      <p>
        Hello {name}!, You are {age} years old.
      </p>
    </div>
  );
};
