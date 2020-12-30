import React, { useState } from 'react';
import {
  Box,
  Button,
  Grommet,
  Heading,
  Form,
  FormField,
  Select,
  TextArea,
  TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';

const FridgeForm = (props) => {
  const [value, setValue] = useState(props.data ? props.data : {});

  const onSubmit = (value) => {
    props.onSubmit(value)
    props.onClose();
  }

  const header = (
    <Heading>{props.type == "add" ? "Add New Fridge" : "Editing Fridge"}</Heading>
  )
  return (
    <Box overflow="auto" pad="medium" gap="medium" margin="medium" margin={{bottom: '100px'}}>
    {header}
    <Form
      onSubmit={({ value }) => onSubmit(value)}
      value={value}
      onChange={nextValue => setValue(nextValue)}
    >
      <FormField name="name" htmlfor="textinput-id" label="Fridge Name">
        <TextInput id="textinput-id" name="name"  placeholder="Community Fridge"/>
      </FormField>
      <FormField name="streetAddress" htmlfor="textinput-id" label="Location">
        <TextInput id="textinput-id" name="streetAddress" placeholder="Street Address" />
      </FormField>
      <FormField name="borough" htmlfor="textinput-id" label="Borough">
      <Select
      name="borough"
      options={['Brooklyn', 'Manhattan', 'Queens', 'Bronx', 'Staten Island']}
      // value={value}
      // onChange={({ option }) => setValue(option)}
      />
      </FormField>
      <FormField name="neighborhood" htmlfor="textinput-id" label="Neighborhood">
        <TextInput id="textinput-id" name="neighborhood" placeholder="Bushwick" />
      </FormField>
      <FormField name="instagram" htmlfor="textinput-id" label="Instagram handle">
        <TextInput id="textinput-id" name="instagram" placeholder="@yourfridge" />
      </FormField>
      <FormField name="link" htmlfor="textinput-id" label="Additional Link/Contact">
        <TextInput id="textinput-id" name="link" placeholder="Email address / volunteer form" />
      </FormField>
      <FormField name="notes" htmlfor="textinput-id" label="Notes">
        <TextArea id="textinput-id" name="notes" placeholder="type anything else people should know about this fridge!" />
      </FormField>
    
      <Box direction="row" gap="medium" pad={{top: "large"}}>
        <Button label="close" onClick={props.onClose} />
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
        
      </Box>
    </Form>
    </Box>
)}

export default FridgeForm